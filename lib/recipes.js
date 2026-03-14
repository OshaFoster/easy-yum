import recipes from "@/data/recipes.json";

export function getAllRecipes() {
  return recipes;
}

export function getRecipeBySlug(slug) {
  return recipes.find((r) => r.slug === slug) ?? null;
}
