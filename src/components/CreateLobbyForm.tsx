"use client"

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card"

export default function CreateLobbyForm() {

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// Read the form data
		const form = e.target;
		const formData = new FormData(form);

		// You can pass formData as a fetch body directly:
		//fetch('/some-api', { method: form.method, body: formData });

		// Or you can work with it as a plain object:
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	}

	return (
		<Card className="m-auto w-xl p-5">
			<form onSubmit={handleSubmit}>
				<label>Lobby Name:
					<Input
						type="text"
						name="lobbyName"
						required
					/>
				</label>
				<br />
				<label>Max Players: (leave blank for unlimited players)
					<Input
						type="number"
						name="maxPlayers"
					/>
				</label>
				<br />
				<label>Default Time: (leave blank to have vote for time)
					<Input
						type="number"
						name="defaultTime"
					/>
				</label>
				<br />
				<Input type="submit" />
			</form>
		</Card>
	);
}
