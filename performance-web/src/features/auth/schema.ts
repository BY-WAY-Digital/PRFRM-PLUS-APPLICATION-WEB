import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string with valid email format",
    })
    .email(),
  password: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Password must be more than 5 characters",
    })
    .min(5)
    .max(50),
});

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string with valid email format",
    })
    .email(),
  password: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Password must be more than 5 characters",
    })
    .min(5)
    .max(50),
});
