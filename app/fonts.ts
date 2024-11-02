import { Raleway, Libre_Baskerville } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
});

export const libre_basker = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
