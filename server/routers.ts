import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { createServiceRequest, listServiceRequests } from "./db";

const serviceRequestInput = z.object({
  name: z.string().trim().min(2).max(160),
  phone: z.string().trim().regex(/^[+()\d\s.-]{7,40}$/, "Enter a valid phone number"),
  zipCode: z.string().trim().regex(/^\d{5}(?:-\d{4})?$/, "Enter a valid ZIP code"),
  email: z.string().trim().email().max(320),
  serviceNeeded: z.string().trim().min(1).max(120),
  preferredDateTime: z.string().trim().max(160).optional(),
  description: z.string().trim().min(3).max(5000),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(({ ctx }) => ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  serviceRequests: router({
    create: publicProcedure.input(serviceRequestInput).mutation(async ({ input }) => {
      const id = await createServiceRequest({
        ...input,
        preferredDateTime: input.preferredDateTime || null,
      });
      return { success: true, id } as const;
    }),
    list: adminProcedure.query(() => listServiceRequests()),
  }),
});

export type AppRouter = typeof appRouter;
