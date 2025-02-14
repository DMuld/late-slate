<script>
	let { children } = $props();
	import "../app.css";
</script>

<nav class="flex bg-red-800 w-screen h-11 p-auto justify-center align-center">
	<div class="m-auto">
		<a
			class="p-2 bg-red-600 border-transparent rounded-md border-style-hidden text-white hover:bg-red-700"
			href="/">Late-Slate</a
		>
		<a
			class="p-2 bg-red-600 border-transparent rounded-md border-style-hidden text-white hover:bg-red-700"
			href="/join">Join</a
		>
		<a
			class="p-2 bg-red-600 border-transparent rounded-md border-style-hidden text-white hover:bg-red-700"
			href="/create">Create</a
		>
	</div>
</nav>

{@render children()}

<style lang="postcss">
	@reference "tailwindcss/theme";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
