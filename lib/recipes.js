import recipes from "@/data/recipes.json";
import sections from "@/data/sections.json";

export function getAllRecipes() {
  return recipes;
}

export function getRecipeBySlug(slug) {
  return recipes.find((r) => r.slug === slug) ?? null;
}

export function getSections() {
  return sections;
}
