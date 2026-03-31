import Header from "@/components/layout/Header";
import RecipeSection from "@/components/sections/RecipeSection";
import { getAllRecipes } from "@/lib/recipes";
import { Carrot, Beet, Onion } from "@/components/ui/FoodWatermarks";

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      {/* Background watermarks */}
      {/* Color experiment: Carrot #b5735a, Onion #5b8a7a, Beet tried: #4a6580 (steel blue), #6b6b8a (lavender), #b8963e (gold) */}
      <div className="hidden md:block"><Carrot width={360} height={360} opacity={0.2} delay={0.2} rotate={-15} className="fixed top-[60px] right-[-60px] pointer-events-none z-0" /></div>
      <Onion  width={340} height={340} opacity={0.2} delay={0.5} className="fixed top-[48%] left-[-50px] pointer-events-none z-0" />
      <div className="hidden md:block"><Beet   width={340} height={340} opacity={0.8} delay={0.8} rotate={10} color="#a81414" className="fixed bottom-[60px] right-[18%] pointer-events-none z-0" /></div>

      <Header />

      <main className="relative z-10 pb-24 px-8 md:px-16 lg:px-24" style={{ paddingTop: "84px" }}>
        <RecipeSection recipes={recipes} />
      </main>
    </div>
  );
}
