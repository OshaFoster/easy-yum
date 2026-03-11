"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import RecipeGrid from "@/components/sections/RecipeGrid";
import RecipeModal from "@/components/recipe/RecipeModal";
import { Carrot, Beet, Onion } from "@/components/ui/FoodWatermarks";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <main className="flex flex-col md:flex-row md:h-screen md:overflow-hidden px-8 md:px-16 lg:px-24 relative" style={{ backgroundColor: "#fbf4e9" }}>

      {/* Backdrop — dims content but sits below watermarks */}
      <div
        onClick={() => setSelectedRecipe(null)}
        className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 ${
          selectedRecipe ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Food watermarks */}
      <Carrot width={360} height={360} opacity={0.45} delay={0.2} rotate={-15} className="fixed top-[-60px] right-[-60px] pointer-events-none z-0" />
      <Onion  width={340} height={340} opacity={0.45} delay={0.5} className="fixed top-[28%] left-[-80px] pointer-events-none z-0" />
      <Beet   width={380} height={380} opacity={0.45} delay={0.8} rotate={10} className="fixed bottom-[10px] right-[4%] pointer-events-none z-0" />

      {/* Left — stays put */}
      <div className="relative z-10 flex-1 flex flex-col justify-start pt-24 pb-16 pr-8">
        <Hero />
        <p className="text-lg text-stone-600 max-w-md leading-loose font-medium mt-6">
          I love cooking — especially simple meals that turn out really good. These are some recipes I make again and again.
        </p>
      </div>

      {/* Right — own scroll container with top fade */}
      <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide pt-24 pb-16">
        <RecipeGrid onSelectRecipe={setSelectedRecipe} />
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </main>
  );
}
