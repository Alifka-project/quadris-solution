'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { ServiceGroup } from "@/content/services";
import { siteRoutes } from "@/lib/routes";

type ServiceCardProps = {
  service: ServiceGroup;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col justify-between overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_rgba(15,23,32,0.08)] transition hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,32,0.12)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          {service.title}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-4 p-8">
        <div className="space-y-4">
          <p className="text-base text-foreground/70">{service.summary}</p>
        </div>
        <div className="pt-2">
          <Link
            href={siteRoutes.serviceDetail(service.slug)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary-600)] transition hover:text-[var(--brand-primary)]"
          >
            Explore service
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
