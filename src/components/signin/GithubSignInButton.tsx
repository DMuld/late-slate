"use client"
import { Button } from "@/components/ui/button"
import { login } from "@/lib/actions/auth";

export default function GithubSignInButton() {
	return (
		<Button onClick={() => login("github")}>Sign in with Github</Button>
	)
}
