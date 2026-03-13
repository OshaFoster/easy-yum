import Link from "next/link";
import { getAllRecipes } from "@/lib/recipes";

export default function RecipeGrid() {
  const recipes = getAllRecipes();

  return (
    <ul className="flex flex-col">
      {recipes.map((recipe) => (
        <li key={recipe.slug}>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="group flex items-baseline gap-4 py-3 transition-colors duration-150"
          >
            <span
              className="font-display text-3xl shrink-0 transition-colors duration-150"
              style={{ color: "var(--accent)" }}
            >
              •
            </span>
            <span className="flex-1 min-w-0">
              <span
                className="font-display text-3xl block transition-colors duration-150 group-hover:opacity-60"
                style={{ color: "var(--ink)" }}
              >
                {recipe.title}
              </span>
              {(recipe.cookTime || recipe.tags?.length > 0) && (
                <span className="text-xs tracking-widest uppercase mt-0.5 block" style={{ color: "var(--ink-muted)" }}>
                  {[recipe.cookTime, ...(recipe.tags ?? [])].filter(Boolean).join(" · ")}
                </span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
