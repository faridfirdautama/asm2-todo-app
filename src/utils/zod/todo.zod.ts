import { z } from "zod";

export const todoValidationSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(20)
    .toUpperCase(),
  todos: z
    .string()
    .min(5, { message: "Todos must be at least 5 characters" })
    .max(100)
    .toUpperCase(),
});
