<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="min-h-dvh bg-black p-12 text-white">
	{@render children()}
</main>
