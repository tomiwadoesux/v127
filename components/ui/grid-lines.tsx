"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function GridLines() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalRefs = useRef<(HTMLDivElement | null)[]>([]);
  const verticalRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline();

      // Animate Horizontal Lines
      tl.fromTo(
        horizontalRefs.current.filter(Boolean),
        { scaleX: 0, opacity: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
        }
      );

      // Animate Vertical Lines
      tl.fromTo(
        verticalRefs.current.filter(Boolean),
        { scaleY: 0, opacity: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
        },
        "-=1.2"
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Horizontal Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`h-${i}`}
          ref={(el) => {
            horizontalRefs.current[i] = el;
          }}
          className="absolute w-full h-[1px] bg-white/[0.03]"
          style={{ top: `${i * 5}%` }}
        />
      ))}

      {/* Vertical Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          ref={(el) => {
            verticalRefs.current[i] = el;
          }}
          className="absolute h-full w-[1px] bg-white/[0.03]"
          style={{ left: `${i * 5}%` }}
        />
      ))}
    </div>
  );
}
