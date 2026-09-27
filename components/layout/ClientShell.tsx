"use client";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { OnekoCat } from "@/components/ui/OnekoCat";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <OnekoCat />
      {children}
    </SmoothScrollProvider>
  );
}
