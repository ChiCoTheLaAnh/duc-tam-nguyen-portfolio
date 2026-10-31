import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveSiteUrl } from "../src/lib/site-url.ts";
const previousUrl = process.env.NEXT_PUBLIC_SITE_URL;
const previousVercel = process.env.VERCEL_ENV;
function restore() {
  if (previousUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
  else process.env.NEXT_PUBLIC_SITE_URL = previousUrl;
  if (previousVercel === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = previousVercel;
}
test("production origin guards and normalization", () => {
  try {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_ENV;
    assert.equal(resolveSiteUrl(), "");
    process.env.VERCEL_ENV = "production";
    assert.throws(() => resolveSiteUrl(), /Vercel-assigned/);
    for (const value of [
      "http://localhost:3000",
      "https://example.com",
      "https://name.example.com",
      "https://actual.invalid/path",
      "https://user:pass@actual.invalid",
      "https://actual.invalid?token=123",
      "not a url",
    ]) {
      process.env.NEXT_PUBLIC_SITE_URL = value;
      assert.throws(() => resolveSiteUrl(), undefined, value);
    }
    // Reserved test-only origin exercises parsing; never used for a build or saved configuration.
    process.env.NEXT_PUBLIC_SITE_URL = " https://portfolio.invalid/ ";
    assert.equal(resolveSiteUrl(), "https://portfolio.invalid");
  } finally {
    restore();
  }
});
