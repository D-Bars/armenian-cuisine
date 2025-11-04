"use server";

import { signIn } from "@/auth/auth";

export async function signInWithCredentials(email: string, password: string) {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { res};
  } catch (e) {
    return {error: "Sign-in failed"};
  }
}
