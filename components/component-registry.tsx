"use client";
import { motion } from "framer-motion";
import {
  Square,
  Type,
  Layout,
  MousePointer2,
  CreditCard,
  Image as ImageIcon,
  Loader2,
  List,
  GalleryVertical,
  Tag,
} from "lucide-react";

const components = [
  {
    name: "Rectangle",
    icon: Square,
    desc: "A bordered box for grouping layout elements",
  },
  { name: "Line", icon: Layout, desc: "A horizontal separator" },
  { name: "Text", icon: Type, desc: "Simple, editable text strings" },
  { name: "Image", icon: ImageIcon, desc: "Container that renders ASCII art" },
  { name: "Banner", icon: Layout, desc: "Large, decorative header text" },
  { name: "Shell", icon: Layout, desc: "The root application frame" },
  { name: "Card", icon: CreditCard, desc: "Content container with title bar" },
  {
    name: "Button",
    icon: MousePointer2,
    desc: "A pressable element",
  },
  { name: "Badge", icon: Tag, desc: "Status indicators (Online, Error)" },
  { name: "List", icon: List, desc: "Vertical list of items" },
  { name: "Tabs", icon: GalleryVertical, desc: "Horizontal navigation bar" },
  { name: "Icon", icon: Square, desc: "Vector-like symbols" },
  {
    name: "Spinner",
    icon: Loader2,
    desc: "Animated loader for active processes",
  },
];

export function ComponentRegistry() {
  return (
    <section
      id="registry"
      className="py-32 bg-zinc-900/30 border-t border-white/5"
    >
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Component Registry
          </h2>
          <p className="text-zinc-400">
            Everything you need to build rich Terminal User Interfaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {components.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center text-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-black border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <comp.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{comp.name}</h4>
                <p className="text-xs text-zinc-500 leading-tight">
                  {comp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
