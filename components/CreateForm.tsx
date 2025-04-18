"use client"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
	lobby_name: z.string().min(5, {
		message: "Lobby Name must be atleast 5 characters",
	}),
	num_players: z.number().min(2, {
		message: "Lobby must allow for atleast 2 players"
	}),
	manual_time: z.number().optional()
})

export default function CreateForm() {

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			lobby_name: "default-lobby",
			num_players: 2,
			manual_time: 0,
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="lobby_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Lobby Name</FormLabel>
								<FormControl>
									<Input placeholder="My Lobby" {...field} />
								</FormControl>
								<FormDescription>Name your lobby</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="num_players"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Number of Players</FormLabel>
								<FormControl>
									<Input type="number" placeholder="5" {...field} />
								</FormControl>
								<FormDescription>How many players?</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="manual_time"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Optional: Enter a Time Manually</FormLabel>
								<FormControl>
									<Input type="number" placeholder="0" {...field} />
								</FormControl>
								<FormDescription>Put 0 if you want to players to vote on a time.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	);
}
