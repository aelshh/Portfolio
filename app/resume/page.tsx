import type { Metadata } from "next";
import ResumePage from "@/components/resume/ResumePage";
import { SITE_URL, AUTHOR_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Resume — ${AUTHOR_NAME}`,
  description:
    "Interactive resume of Adarsh Chaudhary — full-stack developer with experience in React, Next.js, Node.js and TypeScript. Save as PDF or print.",
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Resume — ${AUTHOR_NAME}`,
    description: "Full-stack developer resume — save as PDF or print.",
    url: `${SITE_URL}/resume`,
    siteName: `${AUTHOR_NAME} Portfolio`,
    locale: "en_IN",
    type: "profile",
  },
};

export default function ResumeRoute() {
  return <ResumePage />;
}
