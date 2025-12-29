"use client";
import { motion } from "framer-motion";
import { Check, Terminal, Copy } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Initialize tomcs",
    description: "Initialize a new tomcs project and configuration.",
    command: "npx tomcs init",
  },
  {
    title: "Install Dependencies",
    description: "Install required packages for the Ink environment.",
    command:
      "npm install ink react react-dom ink-gradient ink-big-text sharp groq-sdk dotenv tsx import-jsx figlet --save && npm install -D @types/react @types/node @types/figlet typescript --save-dev",
  },
  {
    title: "Launch the Designer",
    description: "Start the visual interface overlay in your terminal.",
    command: "npx tomcs designer",
  },
  {
    title: "Start Live Preview",
    description:
      "Open a second terminal window to watch your compiled app concurrently.",
    command: "npx tsx watch src/app.tsx",
  },
];

export function Installation() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="installation"
      className="py-32 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: Intro */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Building <br />{" "}
              <span className="text-zinc-500">in Minutes.</span>
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Get from zero to a full visual designer environment with just a
              few commands.
              <br />
              <br />
              <span className="text-white font-semibold">Prerequisites:</span>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                Node.js 18+ (Required for Ink)
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                Groq API Key (for Neural Architect, it's free)
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                NPM or PNPM Package Manager
              </li>
            </ul>
          </div>

          {/* Right: Steps */}
          <div className="md:w-2/3 space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600" />

                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-zinc-500 font-mono text-sm">
                    0{idx + 1}.
                  </span>{" "}
                  {step.title}
                </h4>
                <p className="text-zinc-400 mb-4 text-sm">{step.description}</p>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-black rounded-lg border border-white/10 p-4 font-mono text-sm text-zinc-300 flex justify-between items-start">
                    <span className="whitespace-pre-wrap">{step.command}</span>
                    <button
                      onClick={() => handleCopy(step.command, idx)}
                      className="ml-4 p-2 hover:bg-white/10 rounded transition-colors text-zinc-500 hover:text-white"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
