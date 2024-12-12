<script lang="ts">
	import RecipeCard from './RecipeCard.svelte';
	import { mock_recipes } from '$lib/data/recipes-data';
	import type { Recipe } from '$lib/data/recipes-schema';

	let recipes: Recipe[] = mock_recipes.recipes;

	function filterRecipes(event: Event) {
		const filter = (event.target as HTMLInputElement).value.toLowerCase();
		recipes = mock_recipes.recipes.filter((recipe) => recipe.name.toLowerCase().includes(filter));
	}
</script>

<div class="flex flex-col gap-3">
	<h1 class="mx-auto content-center text-3xl">Welcome to Brandon's Recipes</h1>

	<div>
		<input
			class="mx-auto content-center text-black"
			type="search"
			name="filter"
			id="filter"
			placeholder="Filter..."
			oninput={filterRecipes}
		/>

		Total recipes: {recipes.length}
	</div>

	<!-- This wraps all the recipes -->
	<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
		{#each recipes as recipe}
			<RecipeCard {recipe}></RecipeCard>
		{/each}
	</div>
</div>
