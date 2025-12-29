import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "tomcs | Visual TUI IDE - Visual CLI Builder",
  description:
    "Design Engineering for the Terminal. Build beautiful terminal dashboards with React Ink, AI-powered layouts, and hot module reload. The Shadcn for Terminal.",
  keywords: [
    // High Intent Keywords
    "React Terminal UI Library",
    "Visual CLI Builder Node.js",
    "React Ink IDE",
    "Build Dashboard in Terminal",
    "TUI Design System",
    // Technology Keywords
    "Shadcn for Terminal",
    "Tailwind CSS for CLI",
    "React Ink Hot Reload",
    "Groq AI Code Generator",
    "Image to ASCII Art API",
    // Problem-Solving Keywords
    "How to center text in terminal React",
    "Bind shell command to React component",
    "Monitor Docker containers with TUI",
    "Convert HTML to Terminal Output",
    // Core Terms
    "Terminal User Interface",
    "TUI Designer",
    "CLI Dashboard Builder",
    "React Ink Components",
    "Terminal UI Framework",
  ],
  authors: [{ name: "tomcs" }],
  creator: "tomcs",
  publisher: "tomcs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "tomcs | Visual TUI IDE",
    description:
      "Design Engineering for the Terminal. The Shadcn for Terminal - build beautiful CLI dashboards with React Ink and AI.",
    siteName: "tomcs",
  },
  twitter: {
    card: "summary_large_image",
    title: "tomcs | Visual TUI IDE",
    description:
      "Design Engineering for the Terminal. Build beautiful terminal dashboards with React Ink and AI-powered layouts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=inter:400,500,600,700|jetbrains-mono:400,500,600,700"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-background text-foreground selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
