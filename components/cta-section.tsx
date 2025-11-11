'use client';

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export function CTASection({
  title,
  description,
  ctaLabel,
  ctaHref,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-[40px] border border-[var(--border)] bg-[var(--surface)] px-8 py-16 text-center shadow-[0_32px_100px_rgba(15,23,32,0.08)]"
      >
        <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h3>
        <p className="text-base text-foreground/70 sm:text-lg">{description}</p>
        <div className="flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_14px_44px_rgba(65,70,167,0.24)] transition hover:shadow-[0_18px_52px_rgba(65,70,167,0.28)]"
          >
            {ctaLabel}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
