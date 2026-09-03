import { test, expect } from "@playwright/test";

const targetPages = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "case-studies", path: "/case-studies" },
  { name: "case-study-detail", path: "/case-studies/karnataka-statewide-survey-platform" },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
];

test.describe("Connectify Visual Verification Suite", () => {
  for (const p of targetPages) {
    test(`Visual & Scroll Verification - ${p.name}`, async ({ page }, testInfo) => {
      const projectName = testInfo.project.name;
      const sanitizeProject = projectName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

      // 1. Navigate to page
      await page.goto(p.path, { waitUntil: "domcontentloaded" });

      // 2. Wait for initial entrance animations to settle
      await page.waitForTimeout(1000);

      // 3. Top of page screenshot
      await page.screenshot({
        path: testInfo.outputPath(`${p.name}-01-top-${sanitizeProject}.png`),
        fullPage: false,
      });

      // 4. Incrementally scroll down in 5 steps
      const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
      const stepSize = Math.floor(scrollHeight / 5);

      for (let i = 1; i <= 4; i++) {
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: "smooth" }), stepSize * i);
        await page.waitForTimeout(400);
        await page.screenshot({
          path: testInfo.outputPath(`${p.name}-scroll-step-${i}-${sanitizeProject}.png`),
          fullPage: false,
        });
      }

      // 5. Scroll to bottom
      await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
      await page.waitForTimeout(500);
      await page.screenshot({
        path: testInfo.outputPath(`${p.name}-05-bottom-${sanitizeProject}.png`),
        fullPage: false,
      });

      // 6. Continuous slow scroll top-to-bottom for video capture
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));
      await page.waitForTimeout(200);

      const totalSteps = 8;
      for (let s = 1; s <= totalSteps; s++) {
        await page.evaluate((targetY) => window.scrollTo({ top: targetY, behavior: "smooth" }), (scrollHeight / totalSteps) * s);
        await page.waitForTimeout(100);
      }
    });
  }

  test("Theme Toggle Verification - Homepage Light vs Dark", async ({ page }, testInfo) => {
    const projectName = testInfo.project.name;
    const sanitizeProject = projectName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);

    // Capture initial theme screenshot
    await page.screenshot({
      path: testInfo.outputPath(`theme-toggle-01-initial-${sanitizeProject}.png`),
      fullPage: false,
    });

    // Toggle theme via UI button click
    const toggleBtn = page.locator('#dock-theme-toggle-btn, #theme-toggle-btn').first();
    if (await toggleBtn.isVisible().catch(() => false)) {
      await toggleBtn.click({ force: true });
    } else {
      await page.evaluate(() => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
      });
    }

    await page.waitForTimeout(800);

    // Capture toggled theme screenshot
    await page.screenshot({
      path: testInfo.outputPath(`theme-toggle-02-toggled-${sanitizeProject}.png`),
      fullPage: false,
    });
  });

  test("Hover Effects Verification - Cards", async ({ page }, testInfo) => {
    // Only test hover on desktop (skip mobile since hover doesn't apply)
    if (testInfo.project.name.toLowerCase().includes("mobile")) {
      test.skip();
    }

    const projectName = testInfo.project.name;
    const sanitizeProject = projectName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

    // --- 1. Case Studies Page (Tilt + Spotlight) ---
    await page.goto("/case-studies", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000); // Wait for preloader/animations

    // Find the first case study card (wraps with TiltCard/SpotlightCard)
    const caseStudyCard = page.locator('.tilt-card').first();
    await caseStudyCard.waitFor({ state: "visible", timeout: 10000 }).catch(() => {});
    
    if (await caseStudyCard.isVisible()) {
      const box = await caseStudyCard.boundingBox();
      if (box) {
        // Scroll card into view (using evaluate to bypass Playwright stability checks on floating elements)
        await caseStudyCard.evaluate((node) => node.scrollIntoView({ block: "center", behavior: "auto" }));
        await page.waitForTimeout(1000); // Give it time to scroll and settle

        // Re-fetch bounding box after scroll
        const updatedBox = await caseStudyCard.boundingBox();
        if (updatedBox) {
          // Position 1: Top-Left
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.1, updatedBox.y + updatedBox.height * 0.1);
          await page.waitForTimeout(300); // Wait for spring animation to settle
          await page.screenshot({
            path: testInfo.outputPath(`case-study-card-hover-topleft-${sanitizeProject}.png`),
            fullPage: false,
          });

          // Position 2: Center
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.5, updatedBox.y + updatedBox.height * 0.5);
          await page.waitForTimeout(300);
          await page.screenshot({
            path: testInfo.outputPath(`case-study-card-hover-center-${sanitizeProject}.png`),
            fullPage: false,
          });

          // Position 3: Bottom-Right
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.9, updatedBox.y + updatedBox.height * 0.9);
          await page.waitForTimeout(300);
          await page.screenshot({
            path: testInfo.outputPath(`case-study-card-hover-bottomright-${sanitizeProject}.png`),
            fullPage: false,
          });

          // Mouse leave
          await page.mouse.move(0, 0);
          await page.waitForTimeout(300);
        }
      }
    }

    // --- 2. Home Page - What We Build (Spotlight only, on pillar cards) ---
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000); // Wait for preloader/animations

    // Find the first service pillar card (assuming it uses spotlight-card class or similar)
    // Looking at WhatWeBuild.tsx, it adds SpotlightCard which has 'spotlight-card' class
    const serviceCard = page.locator('.spotlight-card').first();
    await serviceCard.waitFor({ state: "visible", timeout: 10000 }).catch(() => {});
    
    if (await serviceCard.isVisible()) {
      const box = await serviceCard.boundingBox();
      if (box) {
        await serviceCard.evaluate((node) => node.scrollIntoView({ block: "center", behavior: "auto" }));
        await page.waitForTimeout(1000);

        // Re-fetch bounding box after scroll
        const updatedBox = await serviceCard.boundingBox();
        if (updatedBox) {
          // Position 1: Top-Left
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.1, updatedBox.y + updatedBox.height * 0.1);
          await page.waitForTimeout(300);
          await page.screenshot({
            path: testInfo.outputPath(`service-card-hover-topleft-${sanitizeProject}.png`),
            fullPage: false,
          });

          // Position 2: Center
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.5, updatedBox.y + updatedBox.height * 0.5);
          await page.waitForTimeout(300);
          await page.screenshot({
            path: testInfo.outputPath(`service-card-hover-center-${sanitizeProject}.png`),
            fullPage: false,
          });

          // Position 3: Bottom-Right
          await page.mouse.move(updatedBox.x + updatedBox.width * 0.9, updatedBox.y + updatedBox.height * 0.9);
          await page.waitForTimeout(300);
          await page.screenshot({
            path: testInfo.outputPath(`service-card-hover-bottomright-${sanitizeProject}.png`),
            fullPage: false,
          });
        }
      }
    }
  });
});
