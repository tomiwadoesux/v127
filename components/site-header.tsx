"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Install", href: "#installation" },
  { name: "Manual", href: "#manual" },
  { name: "Registry", href: "#registry" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-black/5">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3 h-3 bg-white group-hover:bg-accent transition-colors" />
            <span className="font-mono font-bold text-white tracking-tight">
              tomcs
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono text-zinc-500 hover:text-white transition-colors relative group overflow-hidden"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowVideo(true)}
              className="text-xs font-mono text-zinc-500 hover:text-white transition-colors border border-white/10 px-3 py-1 hover:border-white/30 bg-transparent cursor-pointer"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Video Overlay Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101] cursor-pointer"
            aria-label="Close video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Video Container */}
          <div
            className="relative w-[90vw] max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full rounded-lg shadow-2xl"
              src="/videos/Setup.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
