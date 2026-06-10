"use client";

import dynamic from "next/dynamic";

const FloatingShapes = dynamic(
  () => import("@/components/three/FloatingShapes"),
  { ssr: false }
);

export default function ThreeBackground() {
  return <FloatingShapes />;
}
