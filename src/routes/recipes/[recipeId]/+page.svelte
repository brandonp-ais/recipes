<script lang="ts">
	import { getRecipe, type Recipe } from '$lib/data/recipes-schema';
	import type { PageData } from './$types';
	import RecipeDetails from './RecipeDetails.svelte';

	let { data }: { data: PageData } = $props();

	let recipe: Recipe = data.recipe;
	let comments = data.comments;
</script>

<a href="/">◀️ Back</a>

<RecipeDetails {recipe}></RecipeDetails>s

{JSON.stringify(comments)}
