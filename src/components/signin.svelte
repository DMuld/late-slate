<script>
	// we write export let to say that this is a property
	// that means we can change it later!
	export let x = 0;
	const addToCounter = function () {
		++x;
	};
</script>

<div class="w-full">
	<div class="flex w-md justify-center align-center p-5 bg-slate-500">
		<h1 class="text-3xl font-bold m-auto">Sign In!</h1>
		<button id="counter" on:click={addToCounter}>{x}</button>
	</div>
</div>

<style>
	button {
		background: #ffb334;
		border-radius: 8px;
		border: none;
		font-weight: bold;
		cursor: pointer;
		padding: 0.5rem 2rem;
		color: white;
		font-size: 1.5rem;
	}
</style>
