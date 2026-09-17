"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface MaskRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  trigger?: "mount" | "inView";
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

export function MaskReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  trigger = "inView",
  as: Tag = "span",
}: MaskRevealProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className={cn("block overflow-hidden", lineClassName)}>
          <motion.span
            className="block will-change-transform"
            initial={{ y: "110%" }}
            {...(trigger === "mount"
              ? { animate: { y: 0 } }
              : {
                  whileInView: { y: 0 },
                  viewport: { once: true, margin: "-15% 0px -15% 0px" },
                })}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
