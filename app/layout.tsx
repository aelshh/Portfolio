import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import { ThemeSwitchContextProvider } from "@/context/ThemeSwitchContext";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, keywords, pageDescriptions, AUTHOR_NAME } from "@/lib/seo";
import { generateHomeSchema } from "@/lib/json-ld";
import ClientShell from "@/components/layout/ClientShell";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${AUTHOR_NAME} | Full-Stack Web Developer & AI Products Engineer`,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: pageDescriptions.home,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${AUTHOR_NAME} | Full-Stack Web Developer & AI Engineer`,
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
    <html lang="en" className="overflow-x-hidden dark" suppressHydrationWarning>
      <Analytics />
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="Light"){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark")}else if(t==="Dark"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light")}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light")}}catch(e){document.documentElement.classList.add("dark")}})();`,
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
        className={`${interSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased bg-[var(--bg)] text-[var(--fg)] font-sans relative`}
      >
        <ThemeSwitchContextProvider>
          <ActiveSectionContextProvider>
            <ClientShell>
              {children}
            </ClientShell>
          </ActiveSectionContextProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--fg)",
                border: "1px solid var(--line)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
              },
            }}
          />
        </ThemeSwitchContextProvider>

        <JsonLd data={homeSchema} />
      </body>
    </html>
  );
}
