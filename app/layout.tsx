import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitchBtn from "@/components/ThemeSwitchBtn";
import { ThemeSwitchContextProvider } from "@/context/ThemeSwitchContext";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, keywords, pageDescriptions, AUTHOR_NAME } from "@/lib/seo";
import { generateHomeSchema } from "@/lib/json-ld";
import ClientShell from "@/components/layout/ClientShell";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syneDisplay = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${AUTHOR_NAME} | Full-Stack Web Developer & Freelance Next.js Developer India`,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: pageDescriptions.home,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${AUTHOR_NAME} | Freelance Full-Stack Web Developer India`,
    description: pageDescriptions.home,
    url: SITE_URL,
    siteName: `${AUTHOR_NAME} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${AUTHOR_NAME} - Full-Stack Web Developer Portfolio`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${AUTHOR_NAME} | Full-Stack Web Developer`,
    description: pageDescriptions.home,
    images: ["/opengraph-image"],
  },
  keywords: [...keywords],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeSchema = generateHomeSchema();

  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <Analytics />
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="Light"){document.documentElement.classList.add("light")}else if(t==="Dark"){document.documentElement.classList.add("dark")}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.classList.add("light")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1yujGUR7Kr9V8sanS"
          data-version="062024"
        ></script>
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body
        className={`${interSans.variable} ${syneDisplay.variable} ${jetbrainsMono.variable} antialiased bg-base text-text-primary font-sans relative`}
      >
        <div className="noise-overlay" aria-hidden="true" />

        <ThemeSwitchContextProvider>
          <ActiveSectionContextProvider>
            <ClientShell>
              <Header />
              {children}
              <Footer />
            </ClientShell>
          </ActiveSectionContextProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--c-surface)",
                color: "var(--c-text-1)",
                border: "1px solid var(--c-border)",
              },
            }}
          />
          <ThemeSwitchBtn />
        </ThemeSwitchContextProvider>

        <JsonLd data={homeSchema} />
      </body>
    </html>
  );
}
