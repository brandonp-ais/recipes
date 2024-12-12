import { db } from '$lib/server/db';
import { type Comment, comments_table } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { getRecipe, type Recipe } from '$lib/data/recipes-schema';

export const load = (async ({ params }) => {

	let recipe: Recipe = getRecipe(Number(params.recipeId));
	let comments: Comment[] = await db.select().from(comments_table).where(eq(comments_table.recipe_id, Number(params.recipeId)));

	console.log(comments);

	return {
		comments,
		recipe
	};
}) satisfies PageServerLoad;

// Action to create a comment

export const actions = {
	default: async (event) => {

		console.log('Creating comment');

		// Insert the comment into the database
		const form = await event.request.formData();

		const comment = {
			comment: form.get('comment'),
			name: form.get('name'),
			recipe_id: Number(event.params.recipeId)
		};

		await db.insert(comments_table).values({
			recipe_id: comment.recipe_id,
			comment: comment.comment,
			name: comment.name,
		});

		// Redirect to the page to show the comment
		return { success: true };
	}
} satisfies Actions;