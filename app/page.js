"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import RecipeGrid from "@/components/sections/RecipeGrid";
import RecipeModal from "@/components/recipe/RecipeModal";
import Daisy from "@/components/ui/Daisy";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <main className="bg-[#fdf6ee] flex flex-col md:flex-row md:h-screen md:overflow-hidden px-8 md:px-16 lg:px-24 relative">

      {/* Daisy watermarks */}
      <Daisy id="daisy-1" size={300} opacity={0.5} delay={0.2} className="fixed top-[-60px] right-[-60px] pointer-events-none" />
      <Daisy id="daisy-2" size={260} opacity={0.4} delay={0.5} className="fixed top-[38%] left-[-80px] pointer-events-none" />
      <Daisy id="daisy-3" size={320} opacity={0.5} delay={0.8} className="fixed bottom-[-80px] right-[12%] pointer-events-none" />

      {/* Left — stays put */}
      <div className="flex-1 flex flex-col justify-start pt-24 pb-16 pr-8">
        <Hero />
        <p className="text-lg text-stone-600 max-w-md leading-loose font-medium mt-6">
          I love cooking — especially simple meals that turn out really good. These are some recipes I make again and again.
        </p>
      </div>

      {/* Right — own scroll container with top fade */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pt-24 pb-16">
        <RecipeGrid onSelectRecipe={setSelectedRecipe} />
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </main>
  );
}
