import puppeteer from "puppeteer-core";

const sel = process.argv[2] || "#formular";
const out = process.argv[3] || "/tmp/el.png";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1800));
const el = await page.$(sel);
if (!el) { console.log("not found"); process.exit(1); }
await el.scrollIntoView();
await new Promise((r) => setTimeout(r, 800));
await el.screenshot({ path: out });
console.log("saved", out);
await browser.close();
