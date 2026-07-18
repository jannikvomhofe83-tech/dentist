import puppeteer from "puppeteer-core";
import fs from "node:fs";

const OUT = process.argv[2] || "/tmp/mobile";
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1200));

const pageH = await page.evaluate(() => document.body.scrollHeight);
const step = 800; // 44px overlap
let i = 0;
for (let y = 0; y < pageH; y += step) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await new Promise((r) => setTimeout(r, 350));
  await page.screenshot({ path: `${OUT}/s${String(i).padStart(2, "0")}.png` });
  i++;
}
console.log(JSON.stringify({ pageH, shots: i }));
await browser.close();
