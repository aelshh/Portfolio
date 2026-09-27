"use client";

import { HiDownload } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi2";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function ResumeActions() {
  return (
    <div className="print:hidden fixed bottom-6 right-6 z-[9970] flex items-center gap-3">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-text-secondary text-sm font-medium hover:text-primary hover:border-primary/25 transition-all duration-300"
      >
        <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Portfolio
      </Link>

      <Button
        borderRadius="9999px"
        containerClassName="h-auto"
        className="px-6 py-3 font-semibold text-sm gap-2"
        duration={3000}
        onClick={() => window.print()}
      >
        <span className="flex items-center gap-2">
          Save as PDF
          <HiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </span>
      </Button>
    </div>
  );
}
