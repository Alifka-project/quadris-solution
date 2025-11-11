import Link from "next/link";

import { footerNav } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
              Quadris Solutions Ltd
            </p>
            <p className="text-sm text-foreground/70">
              Nüschelerstrasse 31<br />
              P.O. Box<br />
              8022 Zurich, Switzerland
            </p>
            <div className="space-y-1 text-sm text-foreground/70">
              <a href="tel:+41442246111" className="hover:text-foreground">
                +41 44 224 61 11
              </a>
              <br />
              <a
                href="mailto:office@quadris.solutions"
                className="hover:text-foreground"
              >
                office@quadris.solutions
              </a>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6 text-sm sm:grid-cols-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Navigate
              </p>
              <ul className="space-y-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground/70 transition hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Services
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>Management &amp; Administration</li>
                <li>Family Office Services</li>
                <li>Estate Planning</li>
                <li>Reporting &amp; Controlling</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Offices
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>Zurich</li>
                <li>Dubai</li>
                <li>Singapore</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Compliance</p>
              <p className="text-sm text-foreground/70">
                Member of VQF – Financial Services Standards Association. Audited annually on AML and due diligence compliance.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Quadris Solutions LTD. All rights reserved.</p>
          <p className="text-foreground/40">
            Built with respect for Swiss precision and digital stewardship.
          </p>
        </div>
      </div>
    </footer>
  );
}
