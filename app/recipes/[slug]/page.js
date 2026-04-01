import Link from "next/link";
import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes";
import Header from "@/components/layout/Header";
import { Asset47, Asset20, Meat39 } from "@/components/ui/FoodWatermarks";
import FadeIn from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  return { title: recipe ? `${recipe.title} — Easy, Yum!` : "Easy, Yum!" };
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Header />

      {/* Subtle background watermark */}
      <Asset47
        width={460}
        height={460}
        opacity={0.07}
        delay={0.3}
        rotate={-15}
        flipX
        color="var(--blush)"
        className="fixed top-[60%] right-[4%] -translate-y-1/2 pointer-events-none z-0"
      />

      <div className="hidden md:block">
        <Asset20
          width={380}
          height={380}
          opacity={0.07}
          delay={0.4}
          rotate={15}
          color="var(--blush)"
          className="fixed top-[20%] left-[-20px] -translate-y-1/2 pointer-events-none z-0"
        />
      </div>

      <div className="hidden md:block">
        <Meat39
          width={340}
          height={340}
          opacity={0.07}
          delay={0.5}
          rotate={-10}
          color="var(--blush)"
          className="fixed bottom-[-20px] left-[4%] pointer-events-none z-0"
        />
      </div>

<main className="relative z-10 pt-28 pb-24 pr-8 md:pr-16 lg:pr-24 pl-[64px] md:pl-[92px] lg:pl-[140px] max-w-4xl">
        <FadeIn>

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-12 transition-opacity duration-150 hover:opacity-50"
          style={{ color: "var(--ink-muted)" }}
        >
          ← Recipes
        </Link>

        {/* Hero image */}
        {recipe.images?.main && (
          <div className="mb-10 rounded overflow-hidden">
            <img
              src={recipe.images.main}
              alt=""
              className="w-full object-cover"
              style={{ height: 320, opacity: 0.9 }}
            />
          </div>
        )}

        {/* Title + meta */}
        <div className="mb-10">
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-4" style={{ color: "var(--ink)" }}>
            {recipe.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase" style={{ color: "var(--ink-muted)" }}>
            {recipe.servings && <span>Serves {recipe.servings}</span>}
            {recipe.prepTime && <span>Prep {recipe.prepTime}</span>}
            {recipe.cookTime && <span>Cook {recipe.cookTime}</span>}
            {recipe.tags?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: "var(--ink-muted)" }}>
          {recipe.description}
        </p>

        <div className="border-t mb-12" style={{ borderColor: "var(--border)" }} />

        {/* Ingredients + Instructions */}
        {(recipe.ingredients?.length > 0 || recipe.instructions?.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 mb-12">

            {recipe.ingredients?.length > 0 && (
              <div>
                <h2 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--ink-muted)" }}>
                  Ingredients
                </h2>
                <ul className="flex flex-col gap-3">
                  {recipe.ingredients.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                      <span style={{ color: "var(--accent)" }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {recipe.instructions?.length > 0 && (
              <div>
                <h2 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--ink-muted)" }}>
                  Directions
                </h2>
                <ol className="flex flex-col gap-5">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="flex gap-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                      <span className="shrink-0 text-sm pt-0.5 w-5" style={{ color: "var(--ink-muted)" }}>{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

          </div>
        )}

        {/* Notes */}
        {recipe.notes && (
          <div className="border-t pt-10 mb-10" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ink-muted)" }}>Notes</h2>
            <div className="flex flex-col gap-3 max-w-2xl">
              {recipe.notes.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Variation */}
        {recipe.variation && (
          <div className="border-t pt-10 mb-10" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ink-muted)" }}>Variation</h2>
            <div className="flex flex-col gap-3 max-w-2xl">
              {recipe.variation.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Optional sections */}
        {recipe.optionalSections?.map((section, i) => (
          <div key={i} className="border-t pt-10 mb-10" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ink-muted)" }}>{section.title}</h2>
            {section.intro && (
              <p className="text-sm italic mb-4" style={{ color: "var(--ink-muted)" }}>{section.intro}</p>
            )}
            <ol className="flex flex-col gap-4 max-w-2xl">
              {section.steps.map((step, j) => {
                const isLink = typeof step === 'object' && step.slug;
                return (
                  <li key={j} className="flex gap-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                    {section.steps.length > 1 && (
                      <span className="shrink-0 text-sm pt-0.5 w-5" style={{ color: "var(--ink-muted)" }}>{j + 1}.</span>
                    )}
                    {isLink ? (
                      <Link href={`/recipes/${step.slug}`} className="underline underline-offset-2 transition-opacity duration-150 hover:opacity-50" style={{ color: "var(--ink)" }}>{step.text}</Link>
                    ) : (
                      <span>{step}</span>
                    )}
                  </li>
                );
              })}
            </ol>
            {section.outro && (
              <p className="text-base italic mt-4" style={{ color: "var(--ink-muted)" }}>{section.outro}</p>
            )}
          </div>
        ))}

        </FadeIn>
      </main>
    </div>
  );
}
