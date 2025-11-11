'use client';

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TrustStripProps = {
  items: Array<{
    value: ReactNode;
    label: string;
  }>;
  className?: string;
};

export function TrustStrip({ items, className }: TrustStripProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 px-4 sm:grid-cols-3 md:px-0">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="text-center"
          >
            <p className="text-4xl font-semibold tracking-tight text-[var(--brand-primary-600)] sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-foreground/70 sm:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
