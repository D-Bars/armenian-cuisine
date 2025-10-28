import prisma from "./prisma";

export async function getUserFromDb(email: string) {
    return await prisma.users.findFirst({
        where: {
            email
        }
    })
}