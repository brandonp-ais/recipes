import { mock_recipes } from "./recipes-data";

// Derive the type for a single recipe from the mock data
export type Recipe = typeof mock_recipes['recipes'][number];

// Get a single recipe from the mock data
export function getRecipe(id: number): Recipe {
	return mock_recipes.recipes.find((recipe) => recipe.id === id) as Recipe;
};