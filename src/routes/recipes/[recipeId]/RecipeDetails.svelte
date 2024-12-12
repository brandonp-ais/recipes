<script lang="ts">
	import type { Recipe } from '$lib/data/recipes-schema';

	export let recipe: Recipe;

	// function handleAddComment(event: Event) {
	// 	event.preventDefault();
	// 	const comment = (event.target as HTMLFormElement).comment.value;
	// 	alert(comment);
	// }
</script>

<div class="grid w-full grid-cols-2 gap-3 px-20">
	<div class="flex flex-col gap-3 border border-purple-800 p-2">
		<h2 class="text-yellow-500">{recipe.name}</h2>
		<picture>
			<img src={recipe.image} alt={recipe.name} width="256" />
		</picture>
		<ul class="flex flex-col gap-1">
			{#each recipe.ingredients as ingredient}
				<li><p class="text-xs">{ingredient}</p></li>
			{/each}
		</ul>
		<p>Difficulty: {recipe.difficulty}</p>
	</div>

	<form method="POST" class="flex flex-col gap-2.5">
		<div class="flex flex-col gap-2">
			<label for="comment">Leave a comment</label>
			<textarea class="text-black" name="comment" id="comment"></textarea>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Name</label>
			<input class="text-black" type="text" name="name" id="name" />
		</div>
		<button class="border border-purple-700 text-yellow-400">Submit</button>
	</form>
</div>
