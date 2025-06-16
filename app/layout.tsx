import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adarsh Chaudhary | Full-Stack Web Developer from India",
  description:
    "I'm Adarsh, a full-stack web developer based in India, specializing in building modern, high-performance web applications with Next.js, Prisma, React, Node.js, TypeScript, and PostgreSQL. I focus on creating clean, scalable solutions that deliver great user experiences. Dive into my portfolio to see my latest projects and how I bring ideas to life through code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <body
        className={`${interSans.variable} antialiased bg-gray-50 text-gray-950   relative  h-[1000px] pt-28 sm:pt-36  `}
      >
        <div
          className={`bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem]  -z-10 rounded-full  blur-[10rem] sm:w-[68.75rem]`}
        ></div>
        <div
          className={`bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] w-[31.25rem]  -z-10 h-[50rem] blur-[10rem] rounded-full sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem]   `}
        ></div>

        <ActiveSectionContextProvider>
          <Header />

          {children}
        </ActiveSectionContextProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
