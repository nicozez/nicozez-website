"use client";

import { motion } from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function StarGrid() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const grid = [14, 30] as const;

  // Variants for star grid items
  const starVariants = {
    hidden: {
      opacity: 0,
      scale: 1,
      rotate: 0,
      color: "#fff", // White color
    },
    visible: (index: number) => ({
      opacity: [0, 0.4, 0.2],
      scale: [1, 3, 1],
      rotate: [0, 180, 360],
      color: ["#fff", "#fff", "#fff"], // Always white
      transition: {
        delay: index * 0.03, // Simulate stagger effect
        duration: 1.2,
        times: [0, 0.6, 1],
      },
    }),
    looping: (index: number) => ({
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 3, 1],
      rotate: [0, 180, 360],
      color: ["#fff", "#fff", "#fff"], // Always white
      transition: {
        repeat: Infinity,
        repeatDelay: 8,
        delay: index * 0.03,
        duration: 1.2,
        times: [0, 0.6, 1],
      },
    }),
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-0 -z-10"
      opacity={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            const index = i * grid[1] + j;
            return (
              <motion.path
                key={index}
                fill="currentColor"
                opacity=".2"
                className="star-grid-item"
                d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
                custom={index}
                variants={starVariants}
                initial="hidden"
                animate={prefersReducedMotion ? "hidden" : ["visible", "looping"]}
              />
            );
          });
        })}
      </g>
    </motion.svg>
  );
}