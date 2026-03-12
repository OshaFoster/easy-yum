"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Asset28 } from "@/components/ui/FoodWatermarks";

export default function RecipeModal({ recipe, onClose }) {
  const isOpen = !!recipe;
  const titleRef = useRef(null);
  const [titleHidden, setTitleHidden] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setTitleHidden(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [recipe]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) setTitleHidden(false);
  }, [isOpen]);

  return (
    <>
      {/* Panel */}
      <div
        className={`fixed bottom-0 top-8 left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 bg-white shadow-2xl rounded-t-3xl transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white rounded-t-3xl px-[10%] py-5 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors duration-150 text-sm tracking-wide shrink-0"
          >
            ← Close
          </button>
          <AnimatePresence>
            {titleHidden && recipe && (
              <motion.span
                key={recipe.slug}
                className="font-display text-xl text-stone-700 truncate"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              >
                {recipe.title}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto px-[10%] pb-24 scrollbar-hide">
          {recipe && (
            <div className="relative">
              {/* Watermark — starts at viewport center, scrolls with content */}
              <Asset28
                width={420}
                height={420}
                opacity={0.5}
                delay={0.2}
                rotate={-20}
                color="#e8d6c6"
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
                style={{ top: "calc(50vh - 320px)" }}
              />
            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <motion.h2
                  ref={titleRef}
                  key={recipe.slug}
                  className="font-display text-5xl text-stone-900 leading-tight"
                  initial={{ y: -16 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 8, delay: 0.45 }}
                >
                  {recipe.title}
                </motion.h2>
                <div className="flex gap-4 text-xs text-stone-400 uppercase tracking-widest">
                  {recipe.servings && <span>Serves {recipe.servings}</span>}
                  {recipe.ingredients?.length > 0 && <span>{recipe.ingredients.length} Ingredients</span>}
                  {recipe.prepTime && <span>Prep {recipe.prepTime}</span>}
                  {recipe.cookTime && <span>Cook {recipe.cookTime}</span>}
                </div>
              </div>

              <p className="text-stone-500 text-lg leading-relaxed">
                {recipe.description}
              </p>

              {recipe.ingredients?.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Ingredients</h3>
                  <ul className="flex flex-col gap-2">
                    {recipe.ingredients.map((item) => (
                      <li key={item} className="text-stone-700 text-base border-b border-stone-100 pb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {recipe.instructions?.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Instructions</h3>
                  <ol className="flex flex-col gap-4">
                    {recipe.instructions.map((step, i) => (
                      <li key={i} className="flex gap-4 text-stone-700 text-base leading-relaxed">
                        <span className="text-stone-300 font-semibold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {recipe.notes && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Notes</h3>
                  <div className="flex flex-col gap-3">
                    {recipe.notes.split("\n\n").map((para, i) => (
                      <p key={i} className="text-stone-500 text-base leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {recipe.variation && (
                <div className="border-t border-stone-100 pt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Variation</h3>
                  <p className="text-stone-500 text-base leading-relaxed">{recipe.variation}</p>
                </div>
              )}

              {recipe.optionalSections?.map((section, si) => (
                <div key={si} className="border-t border-stone-100 pt-8 flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">{section.title}</h3>
                  {section.intro && (
                    <p className="text-stone-400 text-sm italic">{section.intro}</p>
                  )}
                  <ol className="flex flex-col gap-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-stone-700 text-base leading-relaxed">
                        <span className="text-stone-300 font-semibold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  {section.outro && (
                    <p className="text-stone-500 text-base italic">{section.outro}</p>
                  )}
                </div>
              ))}
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
