"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Game } from "@/types";
import { Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GameCard } from "./game-card";
import { NavCard } from "./nav-card";

interface GameContentProps {
  currentGameId: string;
  logoUrl: string;
  onSearchClick?: () => void;
}

const GameContent: React.FC<GameContentProps> = ({
  currentGameId,
  logoUrl,
  onSearchClick,
}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch("/data/games.json");
        const data = await response.json();
        setGames(data.games);

        const game = currentGameId
          ? data.games.find((g: Game) => g.id === currentGameId)
          : data.games[0];

        setCurrentGame(game || data.games[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading games:", error);
        setLoading(false);
      }
    };

    loadGames();
  }, [currentGameId]);

  const recommendedGames = React.useMemo(() => {
    if (!currentGame) return [];

    return games
      .filter((game) => game.id !== currentGame.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }, [games, currentGame]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!currentGame) {
    return <LoadingSkeleton />;
  }

  // Fullscreen mode layout
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="relative h-full w-full">
          <iframe
            src={currentGame.link}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Fullscreen controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-white">
            <div className="container mx-auto flex h-16 items-center">
              <div className="flex flex-1 items-center space-x-3 px-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                  <Image
                    src={currentGame.imageUrl}
                    alt={currentGame.title}
                    className="object-cover"
                    fill
                    sizes="40px"
                    priority
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentGame.title}
                </h2>
              </div>
              <div className="px-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFullscreen}
                  aria-label="Exit fullscreen"
                  className="hover:bg-gray-100"
                >
                  <Minimize2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal mode layout
  return (
    <div className="container mx-auto max-w-8xl px-4 py-6">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* Left sidebar */}
        <div className="hidden lg:col-span-2 lg:block space-y-6">
          <NavCard
            logoUrl={logoUrl}
            onSearchClick={onSearchClick}
            className="lg:h-24"
          />
          <div className="space-y-4">
            {recommendedGames.slice(0, 2).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Main game area */}
        <div className="col-span-12 lg:col-span-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            {/* Game container */}
            <div className="aspect-[16/9] w-full bg-black">
              <div className="relative h-full w-full">
                <iframe
                  src={currentGame.link}
                  className="absolute h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Game info bar */}
            <div className="flex h-16 items-center">
              <div className="flex flex-1 items-center space-x-3 px-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                  <Image
                    src={currentGame.imageUrl}
                    alt={currentGame.title}
                    className="object-cover"
                    fill
                    sizes="40px"
                    priority
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {currentGame.title}
                </h1>
              </div>
              <div className="px-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFullscreen}
                  aria-label="Enter fullscreen"
                  className="hover:bg-gray-100"
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="col-span-12 lg:col-span-2">
          <div className="space-y-4">
            {recommendedGames.slice(2, 6).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="col-span-12 lg:hidden space-y-6">
          <NavCard logoUrl={logoUrl} onSearchClick={onSearchClick} />
          <div className="grid grid-cols-2 gap-4">
            {recommendedGames.slice(0, 2).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="container mx-auto max-w-8xl px-4 py-6">
    <div className="grid grid-cols-12 gap-4 lg:gap-6">
      {/* Left column skeleton */}
      <div className="hidden lg:col-span-2 lg:block space-y-6">
        <Skeleton className="h-24 w-full" />
        <div className="space-y-4">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="aspect-video w-full" />
        </div>
      </div>

      {/* Center column skeleton */}
      <div className="col-span-12 lg:col-span-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <Skeleton className="aspect-[16/9] w-full" />
          <div className="h-16" />
        </div>
      </div>

      {/* Right column skeleton */}
      <div className="col-span-12 lg:col-span-2">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="aspect-video w-full" />
          ))}
        </div>
      </div>

      {/* Mobile view skeleton */}
      <div className="col-span-12 lg:hidden space-y-6">
        <Skeleton className="h-24 w-full" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="aspect-video w-full" />
        </div>
      </div>
    </div>
  </div>
);

export default GameContent;
