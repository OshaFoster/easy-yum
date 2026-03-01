import { getAllRecipes } from "@/lib/recipes";

export default function RecipeGrid({ onSelectRecipe }) {
  const recipes = getAllRecipes();

  return (
    <ul className="flex flex-col gap-4">
      {recipes.map((recipe) => (
        <li key={recipe.slug}>
          <button
            onClick={() => onSelectRecipe(recipe)}
            className="group flex items-center gap-4 text-left hover:text-stone-500 transition-colors duration-150"
          >
            <span className="font-display text-4xl text-stone-400 group-hover:text-stone-500 transition-colors duration-150">•</span>
            <span className="font-display text-4xl text-stone-900 group-hover:text-stone-500 transition-colors duration-150">
              {recipe.title}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
