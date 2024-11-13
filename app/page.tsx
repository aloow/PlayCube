// app/page.tsx
"use client";

import { CTASection } from "@/app/ui/CTA";
import { FAQSection } from "@/app/ui/Faq";
import { FeaturesSection } from "@/app/ui/Feature";
import NavBar from "@/app/ui/NavBar";
import { TestimonialsSection } from "@/app/ui/Testimonials";
import { GamesGrid } from "@/components/games-grid";
import GridLoadingSkeleton from "@/components/grid-loading-skeleton";
import type { Game } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch("/data/games.json");
        const data = await response.json();
        setGames(data.games || []);
        setLoading(false);
      } catch (error) {
        console.error("Error loading games:", error);
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <NavBar
        logoUrl="/img/logo.png"
        onSearchClick={() => {
          console.log("Search clicked");
        }}
      />
      <div className="pt-8">
        {loading ? <GridLoadingSkeleton /> : <GamesGrid games={games} />}
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
