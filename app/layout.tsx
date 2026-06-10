import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const interSans = Inter({
  variable: "--font-inter",
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
    <html lang="en" className="!scroll-smooth">
      <Analytics />
      <head>
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
        className={`${interSans.variable} antialiased bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark relative`}
      >
        <div className="noise-overlay" />
        <div className="fixed inset-0 gradient-mesh-light dark:gradient-mesh-dark pointer-events-none -z-10" />

        <ThemeSwitchContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#141416",
                color: "#fafafa",
                border: "1px solid #27272a",
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
