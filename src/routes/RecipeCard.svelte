<script lang="ts">
	import type { Recipe } from '$lib/data/recipes-schema';

	export let recipe: Recipe;
</script>

<div class="flex h-36 flex-col items-center gap-2 border border-purple-800 p-2">
	<a href={`/recipes/${recipe.id}`}>
		<h2 class="text-yellow-500">{recipe.name}</h2>
	</a>
	<picture class="my-auto flex-1">
		<img src={recipe.image} alt={recipe.name} width="56" />
	</picture>
	<p>Difficulty: {recipe.difficulty}</p>
</div>
