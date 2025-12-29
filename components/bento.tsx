"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cpu, LayoutTemplate, RefreshCw, Command } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="features" className="container mx-auto px-6 pb-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          The Holy Grail Features
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          Everything you need to move from "Script" to "Application."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Card 1: AI Architect (Large) */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20 p-8 hover:border-white/20 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">AI Architect</h4>
            <p className="text-zinc-400 mb-6 max-w-md">
              Uses Groq (Llama 3) to compile Shadcn/Tailwind code into TUI JSON
              arrays. Just paste web code, and get a terminal layout.
            </p>
            {/* Visual simulation of code conversion */}
            <div className="font-mono text-xs bg-black/50 p-4 rounded-lg border border-white/5 text-zinc-500">
              <span className="text-purple-400">Prompt:</span> "Create a
              dashboard"
              <br />
              <span className="text-emerald-500">Output:</span>{" "}
              {`[{ type: "Shell", x: 0, y: 0 }]`}
            </div>
          </div>
        </div>

        {/* Card 2: HMR Sync */}
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20 p-8 hover:border-white/20 transition-colors">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">HMR Sync</h4>
            <p className="text-zinc-400 text-sm">
              Bidirectional bridge. Moving a component in the terminal writes
              real React code to your{" "}
              <code className="text-white bg-white/10 px-1 rounded">
                src/app.tsx
              </code>{" "}
              instantly.
            </p>
          </div>
        </div>

        {/* Card 3: Viewport Engine */}
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20 p-8 hover:border-white/20 transition-colors">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <LayoutTemplate className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">Fluid Viewport</h4>
            <p className="text-zinc-400 text-sm">
              Standardized 100x30 virtual grid that automatically scales to fit
              any terminal size, from 13" laptops to 4K monitors.
            </p>
          </div>
        </div>

        {/* Card 4: Logic Binding (Large) */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20 p-8 hover:border-white/20 transition-colors">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Command className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Logic Binding</h4>
              <p className="text-zinc-400 max-w-md">
                Don't write boilerplate. Select any UI component and bind it to
                a shell command like{" "}
                <code className="text-orange-400">docker ps</code> or{" "}
                <code className="text-orange-400">uptime</code>.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-xs text-orange-400">
                Live Execution
              </div>
              <div className="h-px bg-white/10 flex-grow" />
              <div className="font-mono text-xs text-zinc-500">
                useTomcsLogic()
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
