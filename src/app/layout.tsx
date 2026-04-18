import "./globals.css";
import { Titillium_Web, Roboto } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, AUTHOR_NAME, SOCIAL_LINKS } from "@/lib/constants";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    AUTHOR_NAME,
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js",
    "portfolio",
    "UI/UX Designer",
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@simantabarua",
  },
  robots: {
    index: true,
    follow: true,
  },
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "Person"],
    "name": AUTHOR_NAME,
    "url": SITE_URL,
    "jobTitle": "Full Stack Web Developer",
    "description": SITE_DESCRIPTION,
    "sameAs": [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${titillium.className} antialiased bg-[var(--bg-primary)]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
