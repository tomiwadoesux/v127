"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Brain,
  Zap,
  Maximize,
  Terminal,
  Cpu,
  Network,
  Image,
} from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "01",
    name: "Live Sync",
    title: "Live Sync Protocol",
    description:
      "Bidirectional design bridge. Canvas manipulations write directly to src/app.tsx in real-time, eliminating the design-code gap.",
    icon: Palette,
    stat: "esbuild",
  },
  {
    id: "02",
    name: "AI Porter",
    title: "AI Architect",
    description:
      "Turns text prompts into layouts. Paste web code or just describe what you want, and the AI builds the terminal grid for you.",
    icon: Brain,
    stat: "Groq AI",
  },
  {
    id: "03",
    name: "Logic Bind",
    title: "Logic Engine",
    description:
      "Connect UI elements to live bash streams. Bind badges to 'uptime', tables to 'ps aux'.",
    icon: Network,
    stat: "child_process.spawn",
  },
  {
    id: "04",
    name: "Pixel Matrix",
    title: "Pixel Matrix",
    description:
      "Converts images into text and texts into Banners. upload a PNG or JPG, and it transforms into high-quality ASCII art for your terminal.",
    icon: Image,
    stat: "figlet",
  },
];

export function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

      gsap.set(cards, { y: 50, opacity: 0 });

      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        start: "top 85%",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="features" className="py-32 relative bg-black">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2 font-mono text-xs tracking-widest uppercase">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              System Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              Core Modules
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-sm font-mono leading-relaxed">
            Tomcs provides a complete toolchain for building high-fidelity
            terminal interfaces. /usr/bin/tomcs_core
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="feature-card group relative rounded-xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500"
            >
              {/* Header Box */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-1.5 rounded-md bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300`}
                  >
                    <module.icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-accent/80 transition-colors uppercase tracking-wider">
                    {module.name}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <h4 className="text-2xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                  {module.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
                  {module.description}
                </p>

                {/* Footer Meta */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="font-mono text-xs text-zinc-600">
                    ID: {module.id}
                  </div>
                  <div className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                    Performance:{" "}
                    <span className="text-white">{module.stat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
