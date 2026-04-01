"use client";

import { useSection } from "@/context/SectionContext";

const STRIPES = [
  { id: "simple-plates",    color: "#b5735a" },
  { id: "sides",            color: "#5b8a7a" },
  { id: "salads",           color: "#b8963e" },
  { id: "breakfast-sweets", color: "#b07a8a" },
  { id: "broths-soups",     color: "#6b7f8a" },
];

export default function SectionStripes() {
  const { activeSection } = useSection();
  const hasActive = Boolean(activeSection);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 bottom-0 flex"
      style={{ top: "83px", zIndex: 25, pointerEvents: "none" }}
    >
      {STRIPES.map(({ id, color }) => {
        const isActive = activeSection === id;
        const opacity = !hasActive ? 0.9 : isActive ? 0.9 : 0.7;
        return (
          <div
            key={id}
            className="w-2 md:w-3 lg:w-5 transition-opacity duration-500"
            style={{ backgroundColor: color, opacity }}
          />
        );
      })}
    </div>
  );
}
