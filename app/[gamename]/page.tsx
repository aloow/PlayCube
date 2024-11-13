// app/[gamename]/page.tsx
"use client";

import NavBar from "@/app/ui/NavBar";
import GameContent from "@/components/game-content";
import GameLoadingSkeleton from "@/components/game-loading-skeleton";
import type { Game } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GameDetail() {
  const params = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGame = async () => {
      try {
        const response = await fetch("/data/games.json");
        const data = await response.json();
        const foundGame = data.games.find(
          (g: Game) =>
            g.title.toLowerCase().replace(/\s+/g, "-") === params.gamename
        );
        setGame(foundGame || null);
        setLoading(false);
      } catch (error) {
        console.error("Error loading game:", error);
        setLoading(false);
      }
    };

    if (params.gamename) {
      loadGame();
    }
  }, [params.gamename]);

  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar
        logoUrl="/img/logo.png"
        onSearchClick={() => {
          console.log("Search clicked");
        }}
      />
      {loading ? (
        <GameLoadingSkeleton />
      ) : game ? (
        <GameContent
          currentGameId={game.id}
          logoUrl="/img/logo.png"
          onSearchClick={() => {
            console.log("Search clicked");
          }}
        />
      ) : (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Game not found</h1>
          <p className="mt-2 text-gray-600">
            The game you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      )}
    </main>
  );
}
