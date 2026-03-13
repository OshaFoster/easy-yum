"use client";

import { useState } from "react";
import Link from "next/link";

const FILTERS = ["All", "GF", "Vegan", "Paleo", "One-Pan"];

export default function RecipeSection({ recipes }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? recipes
    : recipes.filter((r) => r.tags?.includes(active));

  return (
    <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24">

      {/* Right on desktop, top on mobile — intro + filters */}
      <div className="w-full md:w-[30%] shrink-0 flex flex-col gap-10 md:pt-1">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          I love cooking — especially simple meals that turn out really good. These are some recipes I make again and again.
        </p>

        {/* Filters */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ink-muted)" }}>Filter</p>
          <div className="flex flex-col gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="text-left text-sm tracking-wide transition-opacity duration-150"
                style={{
                  color: active === f ? "var(--accent)" : "var(--ink-muted)",
                  opacity: active === f ? 1 : 0.6,
                }}
              >
                {active === f ? "→ " : ""}{f}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Left on desktop, bottom on mobile — recipe list */}
      <div className="flex-1 min-w-0">
        <ul className="flex flex-col">
          {filtered.map((recipe) => (
            <li key={recipe.slug}>
              <Link
                href={`/recipes/${recipe.slug}`}
                className="group flex items-baseline gap-4 py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="font-display text-3xl shrink-0" style={{ color: "var(--accent)" }}>•</span>
                <span className="flex-1 min-w-0">
                  <span className="font-display text-3xl block origin-left transition-transform duration-200 group-hover:scale-[1.04]" style={{ color: "var(--ink)" }}>
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
      </div>

    </div>
  );
}
