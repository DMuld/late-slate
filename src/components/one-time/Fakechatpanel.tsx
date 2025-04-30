import { Card } from "@/components/ui/card";

export default function Fakechatpanel() {
	return (
		<div className="grid grid-cols-2 gap-5 m-5">
			<Card className="p-5">
				<ul>
					<li><h3><b>Family Member:</b> Where is (insert family member name)?</h3></li>
					<br />
					<li><h3><b>Me:</b> I don't know they said that they were coming.</h3></li>
					<br />
					<li><h3><b>Family Member:</b> I wonder when they will be here?</h3></li>
					<br />
					<li><h3><b>Me:</b> We should bet on it! ;)</h3></li>
				</ul>
			</Card>
			<div className="grid place-items-center">
				<div>
					<h1 className="m-auto w-sm text-center font-bold text-4xl">
						Introducing
					</h1>
					<h1 className="m-auto w-sm text-center font-bold text-5xl">
						Late Slate
					</h1>
				</div>
			</div>
		</div>
	);
}
