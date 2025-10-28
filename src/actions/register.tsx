"use server"

import { IFormData } from "@/types/form-data";
import  prisma  from "@/utils/prisma";

export async function registerUser(formData: IFormData) {
    const { email, password, confirmPassword } = formData;
    console.log(formData);
    try {
        const user = await prisma.users.create({
            data: {
                email: email,
                password: password
            }
        })

        console.log("user", user);

        return user;

    } catch (error) {
        console.error("Registation error: ", error);
        return{error: "Registation error"};
    }
}