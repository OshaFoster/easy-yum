import Header from "@/components/layout/Header";
import Link from "next/link";
import { Meat39, Meat36 } from "@/components/ui/FoodWatermarks";

export const metadata = { title: "About — Easy, Yum!" };

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Header />
      <div className="hidden md:block">
        <Meat39
          width={340}
          height={340}
          opacity={0.4}
          delay={0.4}
          rotate={-10}
          color="#5b8a7a"
          className="fixed top-[65%] left-[-20px] -translate-y-1/2 pointer-events-none z-0"
        />
      </div>
      <div className="opacity-60 md:opacity-100">
        <Meat36
          width={340}
          height={340}
          opacity={0.4}
          delay={0.6}
          rotate={10}
          color="#5b8a7a"
          className="fixed bottom-[-20px] right-[-20px] pointer-events-none z-0"
        />
      </div>
      <main className="relative z-10 pt-28 pb-24 px-8 md:px-16 lg:px-24 max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-16 transition-opacity duration-150 hover:opacity-50"
          style={{ color: "var(--ink-muted)" }}
        >
          ← Recipes
        </Link>

        <section>
          <h1 className="font-display text-5xl mb-8" style={{ color: "var(--ink)" }}>About Easy, Yum!</h1>
          <div className="flex flex-col gap-5 text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            <p>
              This is a place to put your cooking philosophy — how you think about food, what you value in a recipe, why simplicity matters to you.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
