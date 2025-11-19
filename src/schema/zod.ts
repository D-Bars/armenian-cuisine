import { object, string, number } from "zod";
import { z } from "zod";
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const ingredientSchema = object({
  name: z.string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER"
  ], { required_error: "Category is required" }),
  unit: z.enum([
    "GRAMS",
    "KILOGRAMS",
    "LITERS",
    "MILLILITERS",
    "PIECES"
  ], { required_error: "Unit is required" }),
  pricePerUnit: number({ required_error: "Price per unit is required" })
    .min(0, "Price per unit must be at least 0"),
  description: string().optional(),
})