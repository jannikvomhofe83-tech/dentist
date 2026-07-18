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
await new Promise((r) => setTimeout(r, 1500));
// scroll through the page so sticky elements & lazy bits settle, then back to top
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => {
      y += 600;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 40);
      else res();
    };
    step();
  });
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: `${OUT}/full.png`, fullPage: true });

// viewport-sized shot of the very top (what a visitor first sees, incl. sticky bar state)
await page.screenshot({ path: `${OUT}/viewport-top.png` });
// mid-page viewport shot with sticky CTA visible
await page.evaluate(() => window.scrollTo(0, 2000));
await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: `${OUT}/viewport-mid.png` });

const m = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
  pageH: document.body.scrollHeight,
}));
console.log(JSON.stringify(m));
await browser.close();
