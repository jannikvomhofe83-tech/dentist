import { DM_Serif_Display, Inter } from "next/font/google";

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
