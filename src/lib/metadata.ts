import type { Metadata } from "next";
import { site } from "@/content/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = site.url
    ? `${site.url}${path === "/" ? "" : path}`
    : undefined;
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
      siteName: site.name,
      ...(canonical
        ? {
            url: canonical,
            images: [
              {
                url: `${site.url}/opengraph-image`,
                width: 1200,
                height: 630,
                alt: "Tam Nguyen — Data, ML & AI Engineering",
              },
            ],
          }
        : { images: [] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      ...(site.url
        ? { images: [`${site.url}/opengraph-image`] }
        : { images: [] }),
    },
  };
}
