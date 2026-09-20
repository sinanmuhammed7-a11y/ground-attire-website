import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

/*
 * Serif for display + headings, sans for body + captions.
 * The CSS variables are mapped to font roles in globals.css (@theme),
 * so swapping a typeface only touches this file and one line there.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"], // optical sizing: refined at display sizes, sturdy at text sizes
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E5DED4",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: String(siteConfig.founded),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <a
          href="#main"
          className="type-label bg-primary text-primary-foreground sr-only px-4 py-3 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>

        {/* <Header />  → components/layout/header.tsx (next step) */}

        <main id="main" className="flex-1">
          {children}
        </main>

        {/* <Footer />  → components/layout/footer.tsx (wrap in .surface-dark) */}
      </body>
    </html>
  );
}
