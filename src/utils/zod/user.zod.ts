import { z } from "zod";

export const userValidationSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be a string" })
    .toUpperCase()
    .optional(),
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email()
    .min(1, { message: "Email is required, please enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
