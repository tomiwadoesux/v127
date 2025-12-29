import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Installation } from "@/components/installation";
import { DesignerManual } from "@/components/designer-manual";
import { ComponentRegistry } from "@/components/component-registry";
import Ayotomcs from "@/components/ui/ayotomcs";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "tomcs",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Node.js",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Visual IDE and AI Architect for Terminal User Interfaces. Build beautiful CLI dashboards with React Ink, hot module reload, and AI-powered layouts.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    featureList: [
      "Visual TUI Designer",
      "AI-Powered Layout Generation",
      "Hot Module Reload",
      "Image to ASCII Converter",
      "Logic Binding to Shell Commands",
      "React Ink Component Library",
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <Hero />
      <Features />
      <Installation />
      <DesignerManual />
      <ComponentRegistry />
      {/* <TechnicalDetails /> */}

      {/* Footer */}
      <footer className="border-t border-black/5 py-12 text-center text-zinc-500 text-sm bg-background">
        <div className="container mx-auto px-6">
          <p className="pb-2">Design Engineering for the Terminal.</p>
          <Ayotomcs />
        </div>
      </footer>
    </main>
  );
}
