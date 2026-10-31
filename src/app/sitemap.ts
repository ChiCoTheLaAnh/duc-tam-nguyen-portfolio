import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    "",
    "/projects",
    "/experience",
    "/about",
    "/contact",
    "/resume",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${site.url.replace(/\/$/, "")}${path}` }));
}
