import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quadris.solutions"),
  title: {
    default: "Quadris Solutions | International Trust & Advisory",
    template: "%s | Quadris Solutions",
  },
  description:
    "Quadris Solutions is an international trust company delivering management, administration, family office, estate planning, and reporting services with Swiss precision.",
  keywords: [
    "trust company",
    "family office",
    "estate planning",
    "reporting and controlling",
    "Zurich",
    "wealth management",
  ],
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: "https://quadris.solutions",
    siteName: "Quadris Solutions",
    title: "Quadris Solutions | International Trust & Advisory",
    description:
      "Quadris Solutions provides international trust, family office, and reporting services from Zurich with a Swiss-standard approach to compliance and governance.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quadris_solutions",
    creator: "@quadris_solutions",
    title: "Quadris Solutions | International Trust & Advisory",
    description:
      "Management, administration, estate planning, and reporting services delivered with Swiss precision and global reach.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://quadris.solutions",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} ${jetBrainsMono.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
