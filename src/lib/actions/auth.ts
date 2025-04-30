"use server"

import { signIn, signOut } from "@/auth"

export const login = async (oauthProvider: string) => {
  switch (oauthProvider) {
    case "google":
      await signIn("google", { redirectTo: "/" })
    case "github":
      await signIn("github", { redirectTo: "/" })
  }
}

export const logout = async () => {
  await signOut({ redirectTo: "/" })
}
