import Header from "@/components/layout/Header";
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
      <main className="relative z-10 pt-30 pb-10 pr-8 md:pr-16 lg:pt-32 xl:pt-40 lg:pb-12 lg:pr-24 pl-[52px] md:pl-[92px] lg:pl-[140px] max-w-2xl lg:w-full xl:w-5/6 lg:max-w-none">
<section>
<div className="flex flex-col gap-5 text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            <p>
              Simple food, cooked well. These are the recipes I actually make—few ingredients, not much effort, and worth repeating, I think.
            </p>
            <p>
              I&apos;m lucky to live in a rural area where there&apos;s good local meat, dairy, and vegetables. I prefer grass-fed meat and local produce when I can get it—organic after that, and something that looks genuinely alive when I can&apos;t.
            </p>
            <p>
              Things I keep in mind are nutritional density, the impact on the environment, and the quality of life for the animal. These recipes are also gluten-free, because that&apos;s how I cook, though many would go well with bread. When I use dairy, I tend to choose cultured or higher-quality options when available.
            </p>
            <p>
              I usually keep a few things in the fridge—roasted nuts or seeds that I toast myself, and something fermented, like pickles, sauerkraut, or kimchi. I&apos;ll add these to meals for a little extra nutrition, crunch, and flavor.
            </p>
            <p>
              I typically cook with olive oil, but you can swap in butter, coconut oil, or whatever fat you prefer. I try to use fresh herbs when I have them, but most of the time I use dried herbs, crushed between my fingers.
            </p>
            <p>
              Measurements here are a starting point. I cook pretty intuitively. After a few of these, you&apos;ll get a feel for it—a lot of the vegetables and flavors are interchangeable, especially in the roasting dishes. I encourage you to cook to your taste.
            </p>
            <p>
              Made with my daughter and some friends in mind. If you find a few recipes you come back to, that&apos;s the whole point.
            </p>
            <p>
              If you cook something you love and feel inclined, you can donate. Easy Yum is a work in progress.
            </p>
            <p>
              <a
                href="mailto:oshagfoster@gmail.com?subject=Easy%20Yum%20Feedback"
                className="inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-50"
                style={{ color: "var(--ink-muted)" }}
              >
                Get in touch
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
