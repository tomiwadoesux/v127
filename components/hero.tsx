"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Copy,
  Check,
  Terminal,
  Play,
  Layers,
  Command,
  Palette,
  GripHorizontal,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
// import { GridLines } from "@/components/ui/grid-lines"; // Disabled for now
import { DitherEffect } from "@/components/ui/dither";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx tomcs init";
  const container = useRef<HTMLDivElement>(null);
  const terminalTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [designerCopied, setDesignerCopied] = useState(false);
  const designerCommand = "npx tomcs designer";

  const handleDesignerCopy = () => {
    navigator.clipboard.writeText(designerCommand);
    setDesignerCopied(true);
    setTimeout(() => setDesignerCopied(false), 2000);
  };

  const [installCopied, setInstallCopied] = useState(false);
  const installCommand =
    "npm install ink react react-dom ink-gradient ink-big-text sharp groq-sdk dotenv tsx import-jsx figlet --save && npm install -D @types/react @types/node @types/figlet typescript --save-dev";

  const handleInstallCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const [line1Copied, setLine1Copied] = useState(false);
  const [line2Copied, setLine2Copied] = useState(false);

  const cmdLine1 =
    "npm install ink react react-dom ink-gradient ink-big-text sharp groq-sdk dotenv tsx import-jsx figlet --save";
  const cmdLine2 =
    "npm install -D @types/react @types/node @types/figlet typescript --save-dev";

  const handleCopyLine1 = () => {
    navigator.clipboard.writeText(cmdLine1);
    setLine1Copied(true);
    setTimeout(() => setLine1Copied(false), 2000);
  };

  const handleCopyLine2 = () => {
    navigator.clipboard.writeText(cmdLine2);
    setLine2Copied(true);
    setTimeout(() => setLine2Copied(false), 2000);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Reset
      gsap.set(".hero-title", { y: 50, opacity: 0 });
      gsap.set(".hero-sub", { y: 20, opacity: 0 });
      gsap.set(".hero-cmd", { opacity: 0, x: -20 });
      gsap.set(".float-window", { opacity: 0, y: 30, scale: 0.9 });

      // 1. Text Content
      tl.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        onComplete: () => {
          if (terminalTextRef.current && cursorRef.current) {
            const text = "Terminal.";
            const chars = text.split("");

            // Initial state
            terminalTextRef.current.textContent = "";
            gsap.set(cursorRef.current, { opacity: 1 });

            // Typewriter effect
            chars.forEach((char, index) => {
              setTimeout(() => {
                if (terminalTextRef.current) {
                  terminalTextRef.current.textContent += char;
                }
              }, index * 100); // 100ms per character
            });

            // Cursor blinking animation
            gsap.to(cursorRef.current, {
              opacity: 0,
              repeat: -1,
              yoyo: true,
              duration: 0.5,
              ease: "steps(1)",
            });
          }
        },
      });

      tl.to(
        ".hero-sub",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6"
      );

      tl.to(
        ".hero-cmd",
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
        },
        "-=0.4"
      );

      // 2. Floating Interface Reveal
      tl.to(
        ".float-window",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.8"
      );

      // 3. Floating Animation Loop - DISABLED for draggable interaction
      // The user wants to drag windows, so we shouldn't force them to move automatically
      // after the initial reveal.
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-background text-foreground selection:bg-accent/20"
    >
      {/* Background Dither - Dominant Visual */}
      <div className="absolute inset-0 z-0">
        <DitherEffect />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        {/* LEFT COLUMN: Typography & Command */}
        <div className="flex flex-col items-start text-left">
          {/* Headline */}
          <h1 className="hero-title text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[0.9] mix-blend-exclusion">
            Design For The
            <br />
            <div className="flex items-center gap-1 min-h-[1em]">
              <span
                ref={terminalTextRef}
                className="text-zinc-300 text-6xl md:text-8xl font-bold"
              ></span>
              <div
                ref={cursorRef}
                className="w-4 h-12 md:h-20 bg-accent opacity-0"
              />
            </div>
          </h1>

          <p className="hero-sub text-lg text-zinc-200 max-w-xl leading-relaxed mb-10 mix-blend-exclusion">
            The visual IDE and AI Architect for modern engineering. Build,
            theme, and bind logic to CLI apps without the grid-math headaches.
          </p>

          {/* Command & CTA */}
          <div className="hero-cmd flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg p-1 pr-1 pl-4 w-full sm:w-auto min-w-[300px] backdrop-blur-md">
              <div className="flex items-center gap-3 font-mono text-sm text-white">
                <span className="text-accent">{">"}</span>
                {command}
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-md hover:scale-105 active:scale-95 transition-all"
              >
                {copied ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>

          <div className="hero-cmd flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg p-1 pr-1 pl-4 w-full sm:w-auto min-w-[300px] backdrop-blur-md">
              <div className="flex items-center gap-3 font-mono text-sm text-white">
                <span className="text-accent">{">"}</span>
                {designerCommand}
              </div>

              <button
                onClick={handleDesignerCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-md hover:scale-105 active:scale-95 transition-all"
              >
                {designerCopied ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                {designerCopied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Floating IDE Visualization */}
        <div className="relative h-[600px] w-full block perspective-1000 mt-12 lg:mt-0">
          {/* Window 1: Commands Palette (Top Right) */}
          <motion.div
            drag
            dragMomentum={false}
            className="float-window float-window-1 absolute top-0 right-0 sm:right-10 w-56 sm:w-72 bg-zinc-900/95 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-xl shadow-2xl z-30"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4 border-b border-white/5 pb-2">
              <Command className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400">
                Commands
              </span>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {[
                { cmd: "init", desc: "Initialize project" },
                { cmd: "add", desc: "Add component" },
                { cmd: "designer", desc: "Launch Visual Editor" },
                { cmd: "help", desc: "Show help" },
              ].map((item) => (
                <div
                  key={item.cmd}
                  className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded bg-white/5 border border-white/5 text-[10px] sm:text-xs font-mono text-zinc-300"
                >
                  <span className="text-accent font-bold">{item.cmd}</span>
                  <span className="text-zinc-500 truncate">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Window 2: Main Terminal View (Moved Down to avoid overlap) */}
          <motion.div
            drag
            dragMomentum={false}
            className="float-window float-window-2 absolute top-[220px] sm:top-80 left-0 right-0 sm:left-10 sm:right-10 bg-black/90 border border-white/10 rounded-xl p-0 backdrop-blur-xl shadow-2xl z-20 overflow-hidden"
          >
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400">
                ~/install-dependencies.sh
              </span>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                  <button
                    onClick={handleInstallCopy}
                    className="group flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 hover:bg-accent/20 transition-colors"
                  >
                    {installCopied ? (
                      <Check className="w-3 h-3 text-accent" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-400 group-hover:text-accent transition-colors" />
                    )}
                    <span
                      className={`text-[10px] font-mono hidden sm:inline ${
                        installCopied
                          ? "text-accent"
                          : "text-zinc-400 group-hover:text-accent"
                      }`}
                    >
                      {installCopied ? "Copied" : "Copy"}
                    </span>
                  </button>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs text-zinc-300 leading-relaxed overflow-x-auto no-scrollbar">
              <div className="mb-4 whitespace-nowrap flex items-center gap-2">
                <button
                  onClick={handleCopyLine1}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="hover:bg-white/10 p-1 rounded transition-colors group"
                  title="Copy command"
                >
                  {line1Copied ? (
                    <Check className="w-3 h-3 text-accent" />
                  ) : (
                    <Copy className="w-3 h-3 text-zinc-500 group-hover:text-accent" />
                  )}
                </button>
                <div>
                  <span className="text-accent">npm</span> install ink react
                  react-dom ink-gradient ink-big-text sharp groq-sdk dotenv tsx
                  import-jsx figlet --save
                </div>
              </div>
              <div className="whitespace-nowrap flex items-center gap-2">
                <button
                  onClick={handleCopyLine2}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="hover:bg-white/10 p-1 rounded transition-colors group"
                  title="Copy command"
                >
                  {line2Copied ? (
                    <Check className="w-3 h-3 text-accent" />
                  ) : (
                    <Copy className="w-3 h-3 text-zinc-500 group-hover:text-accent" />
                  )}
                </button>
                <div>
                  <span className="text-accent">npm</span> install -D
                  @types/react @types/node @types/figlet typescript --save-dev
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
