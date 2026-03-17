import Header from "@/components/layout/Header";
import Link from "next/link";

export const metadata = { title: "About — Easy, Yum!" };

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Header />
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
