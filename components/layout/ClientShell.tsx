"use client";

import dynamic from "next/dynamic";

const GradientBlob = dynamic(() => import("@/components/ui/GradientBlob"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

const Preloader = dynamic(() => import("@/components/layout/Preloader"), {
  ssr: false,
});

const ScrollProgress = dynamic(
  () => import("@/components/layout/ScrollProgress"),
  { ssr: false }
);

const SmoothScrollProvider = dynamic(
  () => import("@/components/providers/SmoothScrollProvider"),
  { ssr: false }
);

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GradientBlob />
      <CustomCursor />
      <Preloader />
      <SmoothScrollProvider>
        <ScrollProgress />
        {children}
      </SmoothScrollProvider>
    </>
  );
}
