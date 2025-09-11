import "./globals.css";
import { Titillium_Web, Roboto } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

// Font configuration
const titillium = Titillium_Web({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Simanta Barua | Portfolio",
  description:
    "Portfolio of Simanta Barua, a professional web developer specializing in modern frontend technologies and React.",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
  keywords: [
    "Simanta Barua",
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Simanta Barua" }],
  creator: "Simanta Barua",
  themeColor: "#0f172a",
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${titillium.className} antialiased bg-[var(--bg-primary)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col items-center justify-center gap-6 transition-colors duration-300">
            <main className="w-full container px-2 sm:px-4 text-center">
              <Navbar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
