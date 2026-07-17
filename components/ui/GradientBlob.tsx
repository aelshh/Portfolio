"use client";

import { useEffect, useRef } from "react";

export default function GradientBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.3, r: 350, color: [139, 92, 246], speed: 0.0003, phase: 0 },
      { x: 0.7, y: 0.6, r: 300, color: [191, 255, 0], speed: 0.0004, phase: 2 },
      { x: 0.5, y: 0.8, r: 280, color: [139, 92, 246], speed: 0.00025, phase: 4 },
    ];

    const getIsDark = () => document.documentElement.classList.contains("dark");

    const draw = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = getIsDark();

      blobs.forEach((blob) => {
        const cx = canvas.width * blob.x + Math.sin(time * blob.speed + blob.phase) * 100;
        const cy = canvas.height * blob.y + Math.cos(time * blob.speed * 0.7 + blob.phase) * 80;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, blob.r);
        const alpha = isDark ? 0.15 : 0.08;
        gradient.addColorStop(0, `rgba(${blob.color.join(",")}, ${alpha})`);
        gradient.addColorStop(1, `rgba(${blob.color.join(",")}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
