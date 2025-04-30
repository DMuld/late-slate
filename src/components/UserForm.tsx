"use server"

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card"
import GithubSignInButton from "./signin/GithubSignInButton";
import GoogleSignInButton from "./signin/GoogleSignInButton";

export default async function UserForm() {
	return (
		<Card className="m-auto w-xl p-5">
			<form>
				<label>Username:
					<Input
						type="text"
						name="username"
						id="username"
						required
					/>
				</label>
				<br />
				<label>Password:
					<Input
						type="password"
						name="password"
						id="password"
						required
					/>
				</label>
				<br />
				<label>Click to acknowledge that your password is not recoverable.
					<Input
						type="checkbox"
						required
					/>
				</label>
				<br />
				<Input type="submit" />
			</form>
			<p>Sign in with Provider:</p>
			<GithubSignInButton />
			<GoogleSignInButton />
		</Card>
	);
}
