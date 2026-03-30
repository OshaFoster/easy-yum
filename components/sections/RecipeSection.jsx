"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import sectionsData from "@/data/sections.json";

export default function RecipeSection({ recipes }) {
  const sectionRefs = useRef({});
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(48);
  const navHeightRef = useRef(48);

  // Group recipes by section, preserving section order
  const groupedSections = sectionsData
    .map((s) => ({ ...s, recipes: recipes.filter((r) => r.section === s.id) }))
    .filter((s) => s.recipes.length > 0);

  // Initialize to first populated section immediately — no null flash
  const [activeSection, setActiveSection] = useState(groupedSections[0]?.id ?? null);
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTERS = ["All", "GF", "Vegan", "Paleo", "Quick"];

  // Measure nav height and keep updated on resize
  useEffect(() => {
    const update = () => {
      if (navRef.current) {
        const h = navRef.current.offsetHeight;
        setNavHeight(h);
        navHeightRef.current = h;
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.5;
      let current = groupedSections[0]?.id;
      for (const section of groupedSections) {
        const el = sectionRefs.current[section.id];
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (83 + navHeight + 12);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const activeDesc = sectionsData.find((s) => s.id === activeSection);
  const populatedIds = new Set(groupedSections.map((s) => s.id));

  return (
    <div>

      {/* Full-width fixed section nav */}
      <div
        ref={navRef}
        className="fixed left-0 right-0 z-20 px-8 md:px-16 lg:px-24 flex flex-wrap gap-x-8 gap-y-2 py-5 border-b"
        style={{ top: "83px", backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
      >
        {sectionsData.map((s) => {
          const isActive = activeSection === s.id;
          const hasRecipes = populatedIds.has(s.id);
          return (
            <button
              key={s.id}
              onClick={() => hasRecipes && scrollToSection(s.id)}
              className="text-xs tracking-widest uppercase transition-opacity duration-150"
              style={{
                color: isActive ? "var(--accent)" : "var(--ink-muted)",
                opacity: !hasRecipes ? 0.3 : isActive ? 1 : 0.6,
                cursor: hasRecipes ? "pointer" : "default",
              }}
            >
              {isActive ? "→ " : ""}{s.title}
            </button>
          );
        })}
      </div>

      {/* Three-column layout */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-16" style={{ paddingTop: navHeight + 32 }}>

        {/* Left: sticky section description */}
        <div className="hidden md:block w-[20%] shrink-0">
          <div className="sticky top-48">
            <AnimatePresence mode="wait">
              {activeDesc && (
                <motion.div
                  key={activeDesc.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {activeDesc.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Middle: grouped recipe list */}
        <div className="flex-1 min-w-0 max-w-2xl pb-[60vh]">
          {groupedSections.map((section) => {
            const filtered = activeFilter === "All"
              ? section.recipes
              : section.recipes.filter((r) => r.tags?.includes(activeFilter));
            if (!filtered.length) return null;
            return (
              <div
                key={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="mb-14"
              >
                <p className="text-xs tracking-widest uppercase mb-5" style={{ color: activeSection === section.id ? "var(--accent)" : "var(--ink-muted)" }}>
                  {section.title}
                </p>
                <ul className="flex flex-col">
                  {filtered.map((recipe) => (
                    <li key={recipe.slug}>
                      <Link
                        href={`/recipes/${recipe.slug}`}
                        className="group flex items-baseline gap-4 py-3 border-b"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span className="font-display text-3xl shrink-0" style={{ color: "var(--accent)" }}>•</span>
                        <span className="flex-1 min-w-0">
                          <span
                            className="font-display text-3xl block origin-left transition-transform duration-200 group-hover:scale-[1.04]"
                            style={{ color: "var(--ink)" }}
                          >
                            {recipe.title}
                          </span>
                          {(recipe.cookTime || recipe.tags?.length > 0) && (
                            <span className="text-xs tracking-widest uppercase mt-0.5 block" style={{ color: "var(--ink-muted)" }}>
                              {[recipe.cookTime, ...(recipe.tags ?? [])].filter(Boolean).join(" · ")}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Right: sticky filter panel — large screens only */}
        <div className="hidden lg:block w-[18%] shrink-0">
          <div className="sticky top-48">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ink-muted)" }}>Filter</p>
            <div className="flex flex-col gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-left text-sm tracking-wide transition-opacity duration-150"
                  style={{
                    color: activeFilter === f ? "var(--accent)" : "var(--ink-muted)",
                    opacity: activeFilter === f ? 1 : 0.6,
                  }}
                >
                  {activeFilter === f ? "→ " : ""}{f}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
