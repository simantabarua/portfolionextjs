import "./globals.css";
import { Titillium_Web, Roboto } from "next/font/google";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

const wave = Titillium_Web({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simanta Barua",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
