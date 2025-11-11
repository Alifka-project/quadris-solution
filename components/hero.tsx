'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "default" | "compact";
  scrollTarget?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaHref,
  secondaryCtaLabel,
  imageSrc,
  imageAlt,
  variant = "default",
  scrollTarget,
}: HeroProps) {
  const hasCtas = ctaLabel || secondaryCtaLabel;

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "default" ? "bg-gradient-to-br from-[var(--surface)] via-[var(--bg)] to-[var(--surface)]" : "bg-[var(--bg)]",
      )}
    >
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(65,70,167,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(65,70,167,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
      </div>

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-stretch md:gap-16 md:px-12 lg:px-16",
          variant === "default" ? "py-32 md:py-40" : "py-24 md:py-32",
        )}
      >
        <div className="relative z-10 max-w-2xl space-y-6 md:flex-1">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/20 bg-gradient-to-r from-[var(--brand-primary-100)] to-[var(--brand-primary-100)]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)] shadow-[0_0_20px_rgba(65,70,167,0.1)] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
              </span>
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--brand-primary)] bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2rem, 5vw, var(--text-3xl))",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-foreground/70"
              style={{ fontSize: "var(--text-lg)", lineHeight: 1.6 }}
            >
              {subtitle}
            </motion.p>
          )}
          {hasCtas && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--brand-primary-600)] via-[var(--brand-primary)] to-[var(--brand-primary-400)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_rgba(65,70,167,0.25),0_0_40px_rgba(65,70,167,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(65,70,167,0.35),0_0_60px_rgba(65,70,167,0.15)]"
                >
                  <span className="relative z-10">{ctaLabel}</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary-400)] to-[var(--brand-primary-600)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary-100)]/50 hover:text-[var(--brand-primary)] hover:shadow-[0_8px_24px_rgba(65,70,167,0.15)]"
                >
                  {secondaryCtaLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="group relative ml-auto w-full max-w-xl perspective-1000 md:flex-1 md:max-w-none"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-[var(--brand-primary-400)]/20 via-[var(--accent-purple)]/10 to-[var(--accent-cyan)]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[var(--border)]/50 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] shadow-[0_20px_60px_rgba(15,23,32,0.12),0_0_40px_rgba(65,70,167,0.08)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary-100)]/30 via-transparent to-[var(--accent-cyan)]/10" />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(135deg, var(--brand-primary-400), var(--accent-purple), var(--accent-cyan))",
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="relative object-cover transition-transform duration-700 group-hover:scale-105"
                priority={variant === "default"}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {scrollTarget && (
        <div className="relative z-10 -mt-16 flex justify-center pb-10">
          <motion.button
            type="button"
            onClick={() => {
              const element = document.querySelector(scrollTarget);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group inline-flex items-center justify-center text-[var(--brand-primary-600)] transition-transform duration-300 hover:translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-primary-400)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Scroll to next section"
          >
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-9 w-9" strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </div>
      )}
    </section>
  );
}
