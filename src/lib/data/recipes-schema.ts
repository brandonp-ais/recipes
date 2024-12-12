import { mock_recipes, mock_tags } from "./recipes-data";

// Derive the type for a single recipe from the mock data
export type Recipe = typeof mock_recipes['recipes'][number];

// Derive a union of the tags from the mock data
// This is useful for type-checking the tags in the recipe schema
export type Tag = typeof mock_tags;

// Get a single recipe from the mock data
export function getRecipe(id: number): Recipe {
	return mock_recipes.recipes.find((recipe) => recipe.id === id) as Recipe;
};