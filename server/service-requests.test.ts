import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const { createServiceRequest, notifyOwner } = vi.hoisted(() => ({
  createServiceRequest: vi.fn().mockResolvedValue(42),
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./db", () => ({
  createServiceRequest,
  listServiceRequests: vi.fn(),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

vi.mock("./_core/notification", () => ({ notifyOwner }));

function createContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

const validRequest = {
  name: "Test Visitor",
  phone: "555-0100",
  zipCode: "32801",
  email: "test@example.com",
  consent: true as const,
  serviceNeeded: "Cooling",
  preferredDateTime: "Next available",
  description: "Cooling system is not starting.",
};

describe("serviceRequests.create", () => {
  it("persists a valid public service request and notifies the owner", async () => {
    createServiceRequest.mockClear();
    notifyOwner.mockClear();
    const caller = appRouter.createCaller(createContext());

    const result = await caller.serviceRequests.create(validRequest);

    expect(result).toEqual({ success: true, id: 42 });
    expect(createServiceRequest).toHaveBeenCalledWith(expect.objectContaining({
      name: "Test Visitor",
      phone: "555-0100",
      zipCode: "32801",
      email: "test@example.com",
      consentAt: expect.any(Date),
      serviceNeeded: "Cooling",
      preferredDateTime: "Next available",
      description: "Cooling system is not starting.",
    }));
    expect(notifyOwner).toHaveBeenCalledWith(expect.objectContaining({
      title: "New HVAC service request",
      content: expect.stringContaining("Lead #42"),
    }));
  });

  it("rejects invalid contact information before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(caller.serviceRequests.create({
      ...validRequest,
      name: "A",
      zipCode: "bad-zip",
      email: "not-an-email",
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("rejects a malformed ZIP code before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(caller.serviceRequests.create({ ...validRequest, zipCode: "FLORIDA" })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("rejects a malformed phone number before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(caller.serviceRequests.create({ ...validRequest, phone: "call me maybe" })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("rejects a request without privacy consent before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(caller.serviceRequests.create({ ...validRequest, consent: false as never })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("keeps a saved lead successful when the owner notification service is unavailable", async () => {
    createServiceRequest.mockClear();
    notifyOwner.mockRejectedValueOnce(new Error("notification unavailable"));
    const caller = appRouter.createCaller(createContext());

    await expect(caller.serviceRequests.create(validRequest)).resolves.toEqual({ success: true, id: 42 });
    expect(createServiceRequest).toHaveBeenCalled();
  });
});
