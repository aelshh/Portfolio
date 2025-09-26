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

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adarsh Chaudhary | Full-Stack Web Developer from India",
  description:
    "I'm Adarsh, a full-stack web developer based in India, specializing in building modern, high-performance web applications with Next.js, Prisma, React, Node.js, TypeScript, and PostgreSQL. I create scalable solutions that deliver great user experiences. Explore my portfolio to see my latest projects and how I bring ideas to life through code.",
  openGraph: {
    title: "Adarsh Chaudhary | Full-Stack Web Developer from India",
    description:
      "See projects and achievements from Adarsh, a modern full-stack developer using Next.js, TypeScript, React, and more.",
    url: "https://adarshchaudhary.in",
    siteName: "Adarsh Chaudhary Portfolio",
    images: [
      {
        url: "/public/picofme.png",
        width: 1200,
        height: 630,
        alt: "Adarsh Chaudhary - Full-Stack Web Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Chaudhary | Full-Stack Web Developer Portfolio",
    description:
      "Portfolio of Adarsh, full-stack developer building modern web apps with React, Next.js, and TypeScript.",
    images: ["/public/picofme.png"],
  },
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer India",
    "Adarsh Chaudhary",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Node.js",
  ],
  authors: [{ name: "Adarsh Chaudhary", url: "https://adarshchaudhary.in" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <Analytics />
      <body
        className={`${interSans.variable} antialiased  bg-gray-50 text-gray-950   relative  h-[1000px] pt-28 sm:pt-36  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90  `}
      >
        <div
          className={`bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem]  -z-10 rounded-full  blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]`}
        ></div>
        <div
          className={`bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] w-[31.25rem]  -z-10 h-[50rem] blur-[10rem] rounded-full sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem] dark:bg-[#676394]  `}
        ></div>

        <ThemeSwitchContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
          <Footer />
          <Toaster position="bottom-right" />
          <ThemeSwitchBtn />
        </ThemeSwitchContextProvider>
      </body>
    </html>
  );
}
