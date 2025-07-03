import { Special_Elite, Geist } from "next/font/google";

const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  weight: ["400"],
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export { specialElite, geist }; // Export the font objects
