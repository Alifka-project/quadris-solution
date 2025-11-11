import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SkipLink href="#main-content" />
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 scroll-mt-24 bg-[var(--bg)] text-foreground"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
