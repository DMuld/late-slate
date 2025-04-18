import { Card } from "@/components/ui/card";

export default function Lateslateintro() {
	return (
		<div className="w-full m-auto grid grid-cols-3 gap-5 p-5">
			<Card className="w-auto p-5 pl-">
				<h1><b>1. Create a Lobby</b></h1>
				<Card className="p-5 pl-7">
					<ol className="list-decimal">
						<li>Create a lobby</li>
						<li>Configure settings...</li>
						<li>Allow others to join the lobby via QR code.</li>
					</ol>
				</Card>
			</Card>
			<Card className="w-auto p-5">
				<h1><b>2. Vote for a Time</b></h1>
				<Card className="p-5 pl-7">
					<ol className="list-decimal">
						<li>Once all players have entered users will be able to vote for a time.</li>
						<li>This vote will be averaged and that will be the 'over/under' time.</li>
						<li>Players will then be prompted to guess below or above this time.</li>
						<li>Once all players have entered a guess. The game will begin.</li>
					</ol>
				</Card>
			</Card>
			<Card className="w-auto p-5">
				<h1><b>3. Start your Engines</b></h1>
				<Card className="p-5 pl-7">
					<ol className="list-decimal">
						<li>All of the devices will display the count down timer.</li>
						<li>The 'under' voters will win, the 'over' voters only win after the average time passes.</li>
						<li>Users will be kicked and removed if they leave the website</li>
						<li>All players will be added to the account that wins.</li>
					</ol>
				</Card>
			</Card>
		</div>
	);
}
