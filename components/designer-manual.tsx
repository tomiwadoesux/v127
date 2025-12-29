"use client";
import { motion } from "framer-motion";
import {
  Square,
  Type,
  Image as ImageIcon,
  CreditCard,
  List,
  MoreHorizontal,
  MousePointer,
  Keyboard,
  Command,
} from "lucide-react";

export function DesignerManual() {
  return (
    <section id="manual" className="py-32 relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Designer Manual
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Master the controls. Tomcs is styled like a professional design
            tool, adapted for the constraints of the terminal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interface Overview */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MousePointer className="w-6 h-6 text-purple-500" />
              Interface Overview
            </h4>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <h5 className="font-bold text-white mb-2">
                  Canvas & Fluid Viewport
                </h5>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The central infinite drawing area maps 100x30 virtual
                  coordinates to your actual terminal size. It handles the math
                  to ensure your TUI looks consistent on any display.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <h5 className="font-bold text-white mb-2">Toolbar & Layers</h5>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Quick access primitives at the top. Select components using
                  the Layers panel on the left, or use keys{" "}
                  <span className="text-pink-400 font-mono bg-pink-500/10 px-1 rounded">
                    [1-9]
                  </span>{" "}
                  to fast-select.
                </p>
              </div>
            </div>
          </div>

          {/* Shortcuts */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Keyboard className="w-6 h-6 text-emerald-500" />
              Controls & Shortcuts
            </h4>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-zinc-400 font-medium">
                  <tr>
                    <th className="px-6 py-4">Key</th>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4 hidden md:table-cell">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-emerald-400">
                      [A]
                    </td>
                    <td className="px-6 py-4 font-bold text-white">Registry</td>
                    <td className="px-6 py-4 text-zinc-400 hidden md:table-cell">
                      Opens the Component Library popup.
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-purple-400">[P]</td>
                    <td className="px-6 py-4 font-bold text-white">
                      AI Porter
                    </td>
                    <td className="px-6 py-4 text-zinc-400 hidden md:table-cell">
                      Natural language layout generation.
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-yellow-400">[K]</td>
                    <td className="px-6 py-4 font-bold text-white">
                      Logic Bind
                    </td>
                    <td className="px-6 py-4 text-zinc-400 hidden md:table-cell">
                      Connect elements to bash commands (e.g. date).
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-blue-400">[E]</td>
                    <td className="px-6 py-4 font-bold text-white">Export</td>
                    <td className="px-6 py-4 text-zinc-400 hidden md:table-cell">
                      Dumps current layout as raw React code.
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-red-400">[Del]</td>
                    <td className="px-6 py-4 font-bold text-white">Remove</td>
                    <td className="px-6 py-4 text-zinc-400 hidden md:table-cell">
                      Deletes the currently selected component.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
