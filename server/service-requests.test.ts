import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const { createServiceRequest } = vi.hoisted(() => ({
  createServiceRequest: vi.fn().mockResolvedValue(42),
}));

vi.mock("./db", () => ({
  createServiceRequest,
  listServiceRequests: vi.fn(),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

function createContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("serviceRequests.create", () => {
  it("persists a valid public service request and returns its id", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    const result = await caller.serviceRequests.create({
      name: "Test Visitor",
      phone: "555-0100",
      zipCode: "32801",
      email: "test@example.com",
      serviceNeeded: "Cooling",
      preferredDateTime: "Next available",
      description: "Cooling system is not starting.",
    });

    expect(result).toEqual({ success: true, id: 42 });
    expect(createServiceRequest).toHaveBeenCalledWith({
      name: "Test Visitor",
      phone: "555-0100",
      zipCode: "32801",
      email: "test@example.com",
      serviceNeeded: "Cooling",
      preferredDateTime: "Next available",
      description: "Cooling system is not starting.",
    });
  });

  it("rejects invalid contact information before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(
      caller.serviceRequests.create({
        name: "A",
        phone: "555-0100",
        zipCode: "bad-zip",
        email: "not-an-email",
        serviceNeeded: "Cooling",
        description: "Not enough valid input.",
      }),
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("rejects a malformed ZIP code before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(
      caller.serviceRequests.create({
        name: "Test Visitor",
        phone: "555-0100",
        zipCode: "FLORIDA",
        email: "test@example.com",
        serviceNeeded: "Cooling",
        description: "Cooling system is not starting.",
      }),
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createServiceRequest).not.toHaveBeenCalled();
  });

  it("rejects a malformed phone number before touching the database", async () => {
    createServiceRequest.mockClear();
    const caller = appRouter.createCaller(createContext());

    await expect(
      caller.serviceRequests.create({
        name: "Test Visitor",
        phone: "call me maybe",
        zipCode: "32801",
        email: "test@example.com",
        serviceNeeded: "Cooling",
        description: "Cooling system is not starting.",
      }),
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createServiceRequest).not.toHaveBeenCalled();
  });
});
