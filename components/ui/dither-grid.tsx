"use client";

import { useRef, useEffect } from "react";

interface DitherGridProps {
  opacity?: number;
}

export function DitherGrid({ opacity = 0.2 }: DitherGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      // Resize
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      const w = canvas.width;
      const h = canvas.height;
      const centerX = w / 2;
      const centerY = h / 2 + 100; // Shift down slightly

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";

      const gap = 8; // Spacing between dots
      const rows = Math.ceil(h / gap);
      const cols = Math.ceil(w / gap);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * gap;
          const py = y * gap;

          // Calculate distance from center (Sphere effect)
          const dx = px - centerX;
          const dy = py - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Create a "dome" or "sphere" mask
          // We want dots to be visible only within a certain radius,
          // and fade out at the edges of that radius.
          const radius = Math.min(w, h) * 0.6;

          if (dist < radius) {
            // Dither effect:
            // Dots are larger in the center, smaller at edges
            // Or purely alpha based.
            // Let's try size based for that "halftone" look.

            const intensity = 1 - dist / radius;
            const size = (gap / 2) * intensity * intensity; // Non-linear falloff

            // Add subtle wave movement
            const wave =
              Math.sin(dx * 0.01 + time) * Math.cos(dy * 0.01 + time) * 0.5 +
              0.5;
            const dynamicSize = size * (0.8 + wave * 0.4);

            if (dynamicSize > 0.5) {
              ctx.globalAlpha = intensity * opacity;
              ctx.beginPath();
              ctx.arc(px, py, dynamicSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
}
