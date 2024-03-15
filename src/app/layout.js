import Navbar from "@/components/Navbar";
import "./globals.css";
import { Titillium_Web, Roboto } from "next/font/google";

const wave = Titillium_Web({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Simanta Barua",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-[#e0e0e0] px-4 m-4 w-full max-w-[106rem] mx-auto  ${wave.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
