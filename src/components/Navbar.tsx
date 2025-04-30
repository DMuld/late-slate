"use server"
import { auth } from "@/auth";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

export default async function NavBar() {
	const session = await auth();

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Late Slate
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{session?.user &&
					<NavigationMenuItem>
						<Link href="/create-lobby" passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Create Lobby
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				}
				<NavigationMenuItem>
					{session?.user ?
						<Link href="/user/signout" passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Sign Out
							</NavigationMenuLink>
						</Link>
						:
						<Link href="/user" passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Sign In
							</NavigationMenuLink>
						</Link>
					}
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu >
	);
}
