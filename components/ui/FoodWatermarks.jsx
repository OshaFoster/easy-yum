"use client";

import { motion } from "framer-motion";

const LINE_COLOR = "#c4805e";

function Watermark({ src, width, height, opacity, className, delay, rotate = 0, color = LINE_COLOR }) {
  const id = `colorize-${src.replace(/\W/g, "")}-${color.replace("#", "")}`;
  return (
    <motion.div
      className={className}
      style={{ width, height, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity, scale: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 15, delay }}
    >
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={id} x="0" y="0" width="100%" height="100%">
            <feFlood floodColor={color} result="color" />
            <feComposite in="color" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <image href={src} width={width} height={height} filter={`url(#${id})`} />
      </svg>
    </motion.div>
  );
}

export function Carrot(props) {
  return <Watermark src="/watermarks/Meat_8.svg" {...props} />;
}

export function Beet(props) {
  return <Watermark src="/watermarks/Asset%209.svg" {...props} />;
}

export function Onion(props) {
  return <Watermark src="/watermarks/Asset%2035.svg" {...props} />;
}

export function Asset28(props) {
  return <Watermark src="/watermarks/Asset%2028.svg" {...props} />;
}
