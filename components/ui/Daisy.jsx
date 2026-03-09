"use client";

import { motion } from "framer-motion";

export default function Daisy({ size = 280, opacity = 0.07, id = "daisy", className = "", delay = 0 }) {
  const petals = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    return {
      x: 50 + 20 * Math.cos(angle),
      y: 50 + 20 * Math.sin(angle),
    };
  });

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
      animate={{ opacity, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 12, delay }}
    >
      <defs>
        <mask id={id}>
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r="13" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${id})`}>
        {petals.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={22} fill="#7CFFCB" />
        ))}
      </g>
    </motion.svg>
  );
}
