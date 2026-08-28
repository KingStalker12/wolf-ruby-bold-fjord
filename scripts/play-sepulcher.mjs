import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-gpu"] });

async function shot(page, name) {
  await page.screenshot({ path: `/workspace/screenshots/${name}.png` });
}

// Mobile combat
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
mobile.on("pageerror", (e) => console.log("MPAGEERROR", e.message));
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.getByRole("button", { name: "How to play" }).click();
await mobile.waitForTimeout(200);
await shot(mobile, "howto-mobile");
await mobile.getByRole("button", { name: "Return" }).click();
await mobile.getByRole("button", { name: "Descend" }).click();
await mobile.waitForTimeout(300);
await shot(mobile, "map-mobile");
await mobile.getByRole("button", { name: /Rite/i }).first().click();
await mobile.waitForTimeout(350);
const cont = mobile.getByRole("button", { name: "Continue" });
if (await cont.count()) await cont.click();
await mobile.waitForTimeout(200);
await shot(mobile, "combat-mobile");
const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
console.log("MOBILE_OVERFLOW", overflow);
console.log("MOBILE_COMBAT", JSON.stringify((await mobile.locator("body").innerText()).slice(0, 400)));
await mobile.close();
await browser.close();
