"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { locales, primaryNav } from "@/lib/navigation";
import { DEFAULT_LOCALE, siteRoutes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const localeHref = (code: string) => siteRoutes.home(code);

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const contactHref = siteRoutes.contact();
  const homeHref = siteRoutes.home(DEFAULT_LOCALE);

  const isActive = (href: string) => {
    if (href === homeHref) {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--surface)]/80 shadow-[0_8px_32px_rgba(65,70,167,0.08)] backdrop-blur-xl"
          : "bg-transparent backdrop-blur-sm"
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-5 md:px-12 lg:px-16">
        <Link href={homeHref} className="flex items-center">
          <span className="relative flex h-10 w-40 items-center">
            <Image
              src="/brand/logo-quadris.svg"
              alt="Quadris Solutions"
              fill
              priority
              sizes="(max-width: 768px) 140px, 180px"
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-12">
          {primaryNav.map((item, index) => {
            const active = isActive(item.href);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                    active
                      ? "text-[var(--brand-primary)]"
                      : "text-foreground/60 hover:text-[var(--brand-primary)]"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="relative flex items-center gap-1 overflow-hidden rounded-full border border-[var(--border)]/50 bg-gradient-to-br from-[var(--surface)] to-[var(--surface)]/80 p-1 shadow-[0_4px_16px_rgba(65,70,167,0.08)] backdrop-blur-sm">
            {locales.map((locale) => {
              const isCurrent = locale.code === "en";
              if (!locale.available) {
                return (
                  <span
                    key={locale.code}
                    className="cursor-not-allowed px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/30"
                    title="Coming soon"
                  >
                    {locale.label}
                  </span>
                );
              }

              return (
                <Link
                  key={locale.code}
                  href={localeHref(locale.code)}
                  className={cn(
                    "relative z-10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300",
                    isCurrent
                      ? "text-white"
                      : "text-foreground/60 hover:text-[var(--brand-primary)]"
                  )}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="locale-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--brand-primary-600)] to-[var(--brand-primary-400)] shadow-[0_0_20px_rgba(65,70,167,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {locale.label}
                </Link>
              );
            })}
          </div>
          <Link
            href={contactHref}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--brand-primary-600)] via-[var(--brand-primary)] to-[var(--brand-primary-400)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(65,70,167,0.25)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(65,70,167,0.35)] hover:scale-105"
          >
            <span className="relative z-10">Talk to an Advisor</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary-400)] to-[var(--brand-primary-600)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={false}
            />
          </Link>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--border)]/50 bg-gradient-to-br from-[var(--surface)] to-[var(--surface)]/80 text-foreground shadow-[0_4px_16px_rgba(65,70,167,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_6px_20px_rgba(65,70,167,0.12)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Decorative gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--brand-primary-400)] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 0.5 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%" }}
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border)]/30 bg-gradient-to-b from-[var(--surface)]/95 to-[var(--surface)]/80 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col gap-2">
              {primaryNav.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group relative flex items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300",
                        active
                          ? "border-[var(--brand-primary)]/30 bg-gradient-to-r from-[var(--brand-primary-100)] to-transparent text-[var(--brand-primary)] shadow-[0_4px_16px_rgba(65,70,167,0.12)]"
                          : "border-transparent text-foreground/70 hover:border-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-100)]/30 hover:text-[var(--brand-primary)]"
                      )}
                    >
                      <span className="relative z-10 text-base font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/60">
              {locales.map((locale) => {
                const isCurrent = locale.code === "en";
                if (!locale.available) {
                  return (
                    <span
                      key={locale.code}
                      className="cursor-not-allowed opacity-40"
                      title="Coming soon"
                    >
                      {locale.label}
                    </span>
                  );
                }
                return (
                  <Link
                    key={locale.code}
                    href={localeHref(locale.code)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-full px-3 py-1",
                      isCurrent && "bg-[var(--brand-primary-100)] text-foreground",
                    )}
                  >
                    {locale.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--brand-primary-600)] via-[var(--brand-primary)] to-[var(--brand-primary-400)] px-6 py-4 text-base font-semibold text-white shadow-[0_8px_24px_rgba(65,70,167,0.25)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(65,70,167,0.35)] active:scale-95"
            >
              <span>Talk to an Advisor</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
