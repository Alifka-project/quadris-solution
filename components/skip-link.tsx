import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SkipLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(
        "absolute left-1/2 top-4 z-[100] -translate-x-1/2 -translate-y-full rounded-full px-5 py-2 text-sm font-medium opacity-0 transition focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:bg-[var(--brand-primary)] focus-visible:text-white focus-visible:shadow-[0_10px_30px_rgba(65,70,167,0.26)] focus-visible:outline-none focus-visible:pointer-events-auto",
        className,
      )}
    />
  );
}
