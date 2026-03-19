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
      <main className="relative z-10 pt-28 pb-24 px-8 md:px-16 lg:pt-16 lg:pb-12 lg:px-24 max-w-2xl lg:w-5/6 lg:max-w-none">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-10 lg:mb-8 transition-opacity duration-150 hover:opacity-50"
          style={{ color: "var(--ink-muted)" }}
        >
          ← Recipes
        </Link>

        <section>
          <h1 className="font-display text-5xl mb-8 lg:mb-6" style={{ color: "var(--ink)" }}>About Easy, Yum!</h1>
          <div className="flex flex-col gap-5 text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            <p>
              This collection probably isn&apos;t for my super foodie friends. These are the recipes I actually cook—simple, with minimal ingredients and not too much effort. I&apos;ve bought beautiful cookbooks, but I usually end up flipping through them looking for the easiest thing I can make. This is a collection built with that in mind.
            </p>
            <p>
              I&apos;m lucky to live in a rural area where there&apos;s good local meat, dairy, and vegetables. I think quality ingredients make a difference, and I try to consider the impact on the animals and the environment. That said, I mostly just shop at the grocery store and do my best. If I can find local or organic, I will. If not, I just look for food that feels vital.
            </p>
            <p>
              I use olive oil in most recipes, but you can swap in whatever fat you prefer—coconut oil, butter, or something else.
            </p>
            <p>
              I try to use fresh herbs when I have them, but most of the time I&apos;m using dried herbs, crushed between my fingers.
            </p>
            <p>
              I cook pretty intuitively. I did my best to give measurements, but they&apos;re really just a guide. I encourage you to adjust things to your taste. After you cook a few of these, you&apos;ll get a feel for it. A lot of the vegetables and flavors are interchangeable, especially in the roasting dishes.
            </p>
            <p>
              I had my daughter in mind when I made this—simple, starter recipes that are easy to come back to. Also my friends. If you find a few things here that you like and cook again, that&apos;s a win.
            </p>
            <p>
              If you cook something and love it and feel inclined, you can donate. You can also email me—I&apos;m happy for any feedback. Easy Yum is a work in progress.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
