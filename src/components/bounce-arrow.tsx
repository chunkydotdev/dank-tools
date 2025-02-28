"use client";

import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BounceArrow() {
  return (
    <motion.div
      className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-muted-foreground/50 p-2"
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <IconArrowDown size={24} className="stroke-white" />
    </motion.div>
  );
}
