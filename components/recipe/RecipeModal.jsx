"use client";

import { motion } from "framer-motion";

export default function RecipeModal({ recipe, onClose }) {
  const isOpen = !!recipe;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        className={`fixed bottom-0 top-8 left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 bg-white shadow-2xl rounded-t-3xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
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
              <motion.h2
                key={recipe.slug}
                className="font-display text-5xl text-stone-900 leading-tight"
                initial={{ y: -16 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 8, delay: 0.45 }}
              >
                {recipe.title}
              </motion.h2>

              <p className="text-stone-500 text-lg leading-relaxed">
                {recipe.description}
              </p>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Ingredients</h3>
                <ul className="flex flex-col gap-2">
                  {["2 chicken breasts", "3 cloves garlic, minced", "1 lemon, zested and juiced", "2 tbsp olive oil", "Salt and pepper to taste", "Fresh herbs — thyme or rosemary"].map((item) => (
                    <li key={item} className="text-stone-700 text-base border-b border-stone-100 pb-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Instructions</h3>
                <ol className="flex flex-col gap-4">
                  {[
                    "Heat olive oil in a large skillet over medium-high heat.",
                    "Season chicken with salt, pepper, and lemon zest.",
                    "Sear chicken for 5–6 minutes per side until golden and cooked through.",
                    "Add garlic and cook for 1 minute until fragrant.",
                    "Deglaze with lemon juice, scraping up any browned bits.",
                    "Finish with fresh herbs and serve immediately.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 text-stone-700 text-base leading-relaxed">
                      <span className="text-stone-300 font-semibold shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Notes</h3>
                <p className="text-stone-500 text-base leading-relaxed">
                  Swap chicken for salmon and reduce cook time to 3–4 minutes per side. Works great over rice or with crusty bread to soak up the pan sauce.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
