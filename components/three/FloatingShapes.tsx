"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useThemeContext } from "@/context/ThemeSwitchContext";

function Shape({ position, color, scale, speed, isDark }: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  isDark: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialRotation = useMemo(() => ({
    x: Math.random() * Math.PI * 2,
    y: Math.random() * Math.PI * 2,
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = initialRotation.x + state.clock.elapsedTime * speed * 0.2;
    meshRef.current.rotation.y = initialRotation.y + state.clock.elapsedTime * speed * 0.15;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={isDark ? 0.3 : 0.15}
          roughness={0.3}
          metalness={0.1}
          distort={0.2}
          speed={1}
          emissive={isDark ? color : "#000000"}
          emissiveIntensity={isDark ? 0.2 : 0}
        />
      </mesh>
    </Float>
  );
}

function Shapes({ isDark }: { isDark: boolean }) {
  const shapes = useMemo(() => [
    { position: [-4, 2, -5] as [number, number, number], color: "#10b981", scale: 1.2, speed: 0.5 },
    { position: [5, -1, -8] as [number, number, number], color: "#6366f1", scale: 0.8, speed: 0.3 },
    { position: [-3, -3, -10] as [number, number, number], color: "#f59e0b", scale: 0.6, speed: 0.4 },
    { position: [3, 3, -12] as [number, number, number], color: "#10b981", scale: 1.0, speed: 0.6 },
    { position: [-5, 1, -15] as [number, number, number], color: "#ec4899", scale: 0.7, speed: 0.2 },
    { position: [6, -2, -7] as [number, number, number], color: "#6366f1", scale: 0.5, speed: 0.7 },
  ], []);

  return (
    <>
      {shapes.map((s, i) => (
        <Shape key={i} {...s} isDark={isDark} />
      ))}
    </>
  );
}

export default function FloatingShapes() {
  const { theme } = useThemeContext();
  const isDark = theme === "Dark";

  return (
    <div className="fixed inset-0 pointer-events-none -z-5">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Shapes isDark={isDark} />
      </Canvas>
    </div>
  );
}
