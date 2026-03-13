import Header from "@/components/layout/Header";
import RecipeSection from "@/components/sections/RecipeSection";
import { getAllRecipes } from "@/lib/recipes";
import { Carrot, Beet, Onion } from "@/components/ui/FoodWatermarks";

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      {/* Background watermarks */}
      <Carrot width={360} height={360} opacity={0.2} delay={0.2} rotate={-15} className="fixed top-[60px] right-[-60px] pointer-events-none z-0" />
      <Onion  width={340} height={340} opacity={0.2} delay={0.5} className="fixed top-[28%] left-[-80px] pointer-events-none z-0" />
      <Beet   width={380} height={380} opacity={0.2} delay={0.8} rotate={10} className="fixed bottom-[10px] right-[4%] pointer-events-none z-0" />

      <Header />

      <main className="relative z-10 pt-32 pb-24 px-8 md:px-16 lg:px-24">
        <RecipeSection recipes={recipes} />
      </main>
    </div>
  );
}
