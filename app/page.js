"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import RecipeGrid from "@/components/sections/RecipeGrid";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <main className="min-h-screen bg-stone-50 px-8 md:px-16 lg:px-24 py-24">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 md:sticky md:top-24">
          <Hero />
        </div>
        <div className="flex-1 pt-4">
          <RecipeGrid onSelectRecipe={setSelectedRecipe} />
        </div>
      </div>
    </main>
  );
}
