import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/projects",
  "/experience",
  "/about",
  "/contact",
  "/resume",
  "/projects/repeat-order-recommendation",
  "/projects/quickscout-football",
  "/projects/football-mlops-api",
  "/projects/multilabel-image-classification",
  "/projects/text-prompted-video-tracking",
];
for (const width of [375, 768, 1440]) {
  test(`routes, layout and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (e) => errors.push(e.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const a11y = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        a11y.violations,
        `${route}: ${JSON.stringify(a11y.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
      ).toHaveLength(0);
    }
    expect(errors).toHaveLength(0);
  });
}
test("filters, mobile navigation, resume download and internal links", async ({
  page,
  request,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator(".project-card")).toHaveCount(5);
  await page
    .getByRole("button", { name: "Data Engineering", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText("QuickScout");
  await page.getByRole("button", { name: "All projects", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(5);
  await page.goto("/resume");
  const download = page.getByRole("link", {
    name: "Download PDF",
    exact: true,
  });
  await expect(download).toBeVisible();
  await expect(download).toHaveAttribute("download", "Tam-Nguyen-Resume.pdf");
  await expect(
    page.getByRole("link", { name: "Open in a new tab" }),
  ).toHaveAttribute("href", "/resume.pdf");
  const pdf = await request.get("/resume.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const pendingDownload = page.waitForEvent("download");
  await download.click();
  const downloaded = await pendingDownload;
  expect(downloaded.suggestedFilename()).toBe("Tam-Nguyen-Resume.pdf");
  expect(await downloaded.failure()).toBeNull();
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => [
        ...new Set(links.map((a) => a.getAttribute("href")!)),
      ]);
    for (const href of hrefs) {
      expect((await request.get(href)).status(), `${route} -> ${href}`).toBe(
        200,
      );
    }
  }
  expect((await request.get("/no-such-project")).status()).toBe(404);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  const og = await request.get("/opengraph-image");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
});
test("keyboard and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

test("V2 confirmed content, contact links and project hierarchy", async ({
  page,
}) => {
  await page.goto("/");
  const featured = page.locator(".featured-grid .project-card");
  await expect(featured).toHaveCount(3);
  await expect(featured.nth(0)).toContainText("QuickScout");
  await expect(featured.nth(1)).toContainText("Repeat-Order");
  await expect(featured.nth(2)).toContainText("Text-Prompted");
  await expect(
    page.locator('a[href="mailto:ductam.nguyen.201005@gmail.com"]').first(),
  ).toBeVisible();
  for (const href of [
    "https://github.com/ChiCoTheLaAnh",
    "https://www.linkedin.com/in/ductam05/",
  ])
    await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
  await expect(page.locator(".hero-lab")).toHaveCount(0);
  await expect(featured.nth(0)).toContainText("40/40");
  await expect(featured.nth(1)).toContainText("0.3351 → 0.3780");
  await expect(featured.nth(2)).toContainText("4 to 9");
  for (const card of await featured.all()) {
    await expect(card.locator(".project-answers dt")).toHaveText([
      "Problem",
      "Built",
      "Result",
    ]);
    await expect(card.locator(".card-evidence-link a")).toHaveAttribute(
      "href",
      /github\.com\/.+\/blob\/[a-f0-9]{40}\//,
    );
  }
  await expect(
    page.getByRole("link", { name: "Download Resume", exact: true }),
  ).toHaveAttribute("download", "Tam-Nguyen-Resume.pdf");
  await page.goto("/experience");
  await expect(page.locator("main")).toContainText("Viettel High Tech");
  await expect(page.locator("main")).not.toContainText("Viettel Telecom");
  for (const text of [
    "May 2025 – August 2025",
    "May 2024 – August 2024",
    "August 2024 – Present",
    "CS 341",
    "100 students",
    "external NIST FRTE 1:N",
  ])
    await expect(page.locator("main")).toContainText(text);
  await page.goto("/about");
  for (const text of [
    "Mathematics",
    "3.6/4.0",
    "Dean’s List",
    "Applied Statistics",
    "Big Data Mining",
  ])
    await expect(page.locator("main")).toContainText(text);
  await page.goto("/projects/quickscout-football");
  await expect(page.locator("main")).toContainText("76");
  await expect(page.locator("main")).toContainText("74 tests per build");
  await expect(page.locator(".orchestration-lane li")).toHaveCount(6);
  await page.goto("/projects/repeat-order-recommendation");
  await expect(page.locator("main")).toContainText("49.18%");
  await expect(page.locator("main")).toContainText("12.526 ms");
  const detail = page.locator("details");
  await detail.locator("summary").click();
  await expect(detail).toHaveAttribute("open", "");
  await expect(detail).toContainText("not proof of equivalence");
  await page.goto("/projects/text-prompted-video-tracking");
  await expect(page.locator("main")).toContainText("19-clip");
  await expect(page.locator("table")).toContainText("9");
  await expect(page.locator("main")).toContainText("four regressions");
  await page.goto("/projects/handwriting-recognition");
  await expect(page).toHaveURL(/multilabel-image-classification$/);
});
test("metadata never guesses a production origin", async ({
  page,
  request,
}) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page).toHaveTitle(/Tam Nguyen/);
    const canonicalNode = page.locator('link[rel="canonical"]');
    const canonical = (await canonicalNode.count())
      ? await canonicalNode.getAttribute("href")
      : null;
    if (canonical) {
      expect(canonical).toMatch(/^https:\/\//);
      expect(canonical).not.toMatch(/localhost|example\.com|127\.0/);
      expect(
        await page.locator('meta[property="og:url"]').getAttribute("content"),
      ).toBe(canonical);
    }
    const images = await page
      .locator('meta[property="og:image"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("content")));
    for (const src of images)
      expect(src).not.toMatch(/localhost|127\.0|example\.com/);
  }
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).not.toMatch(/localhost|example\.com|127\.0/);
});
test("mobile escape and reduced-motion project cards", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Home", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  expect(
    await page
      .locator(".project-card")
      .first()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
  ).toBe("0s");
});

test("mobile primary navigation remains usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  try {
    const page = await context.newPage();
    await page.goto("/");
    const nav = page.getByRole("navigation", {
      name: "Main navigation",
      exact: true,
    });
    await expect(
      nav.getByRole("link", { name: "Projects", exact: true }),
    ).toBeVisible();
    await nav.getByRole("link", { name: "Projects", exact: true }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.locator(".project-card")).toHaveCount(5);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  } finally {
    await context.close();
  }
});
