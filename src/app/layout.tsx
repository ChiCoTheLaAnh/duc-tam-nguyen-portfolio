import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/shared";
import { site } from "@/content/site";
import "./globals.css";
import { Reveal } from "@/components/reveal";
const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: {
    default: "Tam Nguyen — Data & Machine Learning Engineer",
    template: "%s | Tam Nguyen",
  },
  description: site.description,
  openGraph: {
    title: "Tam Nguyen — Data & Machine Learning Engineer",
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: "Tam Nguyen",
    images: site.url
      ? [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630 }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    images: site.url ? [`${site.url}/opengraph-image`] : [],
  },
};
export const viewport: Viewport = { themeColor: "#faf9f5" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    ...(site.url ? { url: site.url } : {}),
    affiliation: { "@type": "CollegeOrUniversity", name: site.university },
    sameAs: [site.github, site.linkedin],
    homeLocation: { "@type": "Place", name: site.location },
    knowsAbout: ["Data engineering", "Machine learning", "Python", "SQL"],
  };
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      </body>
    </html>
  );
}
