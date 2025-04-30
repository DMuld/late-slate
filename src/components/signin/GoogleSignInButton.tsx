"use client"
import { Button } from "@/components/ui/button"
import { login } from "@/lib/actions/auth";

export default function GoogleSignInButton() {
	return (
		<Button onClick={() => login("google")}>Sign in with Google</Button>
	)
}
