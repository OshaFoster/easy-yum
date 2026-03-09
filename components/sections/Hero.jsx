"use client";

import { motion } from "framer-motion";

const letters = "Easy, Yum!".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

export default function Hero() {
  return (
    <motion.h1
      className="font-display text-8xl md:text-9xl text-stone-900 leading-none tracking-tight flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
