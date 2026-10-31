/** A production origin must be real and explicit; never publish a guessed subdomain. */
export function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) {
    if (process.env.VERCEL_ENV === "production")
      throw new Error(
        "Set NEXT_PUBLIC_SITE_URL to the Vercel-assigned production URL before publishing.",
      );
    return "";
  }
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.port ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    !url.hostname.includes(".") ||
    /^(localhost|127\.|0\.|example\.)/i.test(url.hostname) ||
    url.hostname.endsWith(".example.com")
  )
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an actual public HTTPS origin without a path or credentials.",
    );
  return url.origin;
}
