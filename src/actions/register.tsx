"use server"

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { error } from "console";

export async function registerUser(formData: IFormData) {
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
        return { error: "Passwords do not match" }
    }

    if (password.length < 6) {
        return { error: "Password must be more than 6 characters" }
    }

    try {
        const existingUser = await prisma.users.findUnique({
            where: { email }
        });

        if (existingUser) {
            return { error: "User with this email already exists" }
        }

        const pwHash = await saltAndHashPassword(password);

        const user = await prisma.users.create({
            data: {
                email: email,
                password: pwHash
            }
        })

        return user;
    } catch (error) {
        console.error("Registation error: ", error);
        return { error: "Registation error" };
    }
}