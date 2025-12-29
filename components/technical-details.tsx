"use client";
import { motion } from "framer-motion";
import { Cpu, Image as ImageIcon, RefreshCcw, Code2 } from "lucide-react";

export function TechnicalDetails() {
  return (
    <section id="technical" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-6">
            <Code2 className="w-3 h-3" />
            <span>Engineering Specs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Under the Hood
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tomcs isn't just a UI wrapper. It's a complex system that bridges
            the gap between web technologies and raw terminal stdout streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logic Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-accent/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold mb-4">Logic Engine</h4>
            <code className="text-xs bg-black px-2 py-1 rounded text-accent mb-4 inline-block font-mono">
              useTomcsLogic()
            </code>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Injects custom React hooks to spawn child_process
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Runs bound bash commands every 2000ms
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Pipes stdout directly to component props
              </li>
            </ul>
          </motion.div>

          {/* ASCII Converter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-accent/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
              <ImageIcon className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold mb-4">ASCII Converter</h4>
            <code className="text-xs bg-black px-2 py-1 rounded text-accent mb-4 inline-block font-mono">
              sharp + density_map
            </code>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Resizes images to fit terminal width
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Maps pixel brightness (0-255) to density strings
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Aspect ratio correction for terminal fonts
              </li>
            </ul>
          </motion.div>

          {/* HMR Sync */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-accent/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
              <RefreshCcw className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold mb-4">Hot-Module Sync</h4>
            <code className="text-xs bg-black px-2 py-1 rounded text-accent mb-4 inline-block font-mono">
              tsx watch
            </code>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Designer acts as a real-time compiler
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Serializes JSX state to filesystem
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                Triggers instant updates in preview window
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
