"use client";

import { motion } from "framer-motion";
import { Asset28 } from "@/components/ui/FoodWatermarks";
export default function RecipeModal({ recipe, onClose }) {
  const isOpen = !!recipe;

  return (
    <>
      {/* Panel */}
      <div
        className={`fixed bottom-0 top-8 left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 bg-white shadow-2xl rounded-t-3xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Background watermark */}
        <Asset28
          width={420}
          height={420}
          opacity={0.5}
          delay={0.2}
          rotate={-20}
          color="#e8d6c6"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-8 left-8 text-stone-400 hover:text-stone-700 transition-colors duration-150 text-sm tracking-wide"
        >
          ← Close
        </button>

        {/* Content area */}
        <div className="h-full overflow-y-auto px-[10%] py-24 scrollbar-hide">
          {recipe && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <motion.h2
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
                  <p className="text-stone-500 text-base leading-relaxed">{recipe.notes}</p>
                </div>
              )}

              {recipe.optionalSection && (
                <div className="border-t border-stone-100 pt-8 flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">{recipe.optionalSection.title}</h3>
                  {recipe.optionalSection.intro && (
                    <p className="text-stone-400 text-sm italic">{recipe.optionalSection.intro}</p>
                  )}
                  <ol className="flex flex-col gap-4">
                    {recipe.optionalSection.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-stone-700 text-base leading-relaxed">
                        <span className="text-stone-300 font-semibold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  {recipe.optionalSection.outro && (
                    <p className="text-stone-500 text-base italic">{recipe.optionalSection.outro}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
