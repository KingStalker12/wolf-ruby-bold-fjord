import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const executablePath =
  "/opt/pw-browsers/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath,
  args: ["--allow-file-access-from-files", "--no-sandbox"],
});

async function shot(htmlRel, w, h, out) {
  const page = await browser.newPage({
    viewport: { width: w, height: h },
    deviceScaleFactor: 2,
  });
  const url = pathToFileURL(resolve(htmlRel)).href;
  await page.goto(url, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 250));
  await page.screenshot({ path: out, type: "png", omitBackground: false });
  await page.close();
  console.log("shot", out);
}

await shot("/workspace/.grok/og-card.html", 1200, 630, "/workspace/.grok/og-raw.png");
await shot("/workspace/.grok/x-banner.html", 1200, 264, "/workspace/.grok/x-banner-raw.png");
await browser.close();
