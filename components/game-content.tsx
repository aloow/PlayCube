// components/game-content.tsx
import { Button } from "@/components/ui/button";
import type { Game } from "@/types";
import { ExternalLink, Maximize2, Minimize2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GameCard from "./game-card";
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch("/data/games.json");
        const data = await response.json();
        setGames(data.games);

        const game = data.games.find((g: Game) => g.id === currentGameId);
        setCurrentGame(game || null);
      } catch (error) {
        console.error("Error loading games:", error);
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

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  if (!currentGame) {
    return null;
  }

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
          <div className="absolute bottom-0 left-0 right-0 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4">
              <div className="flex flex-1 items-center space-x-3">
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
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFullscreen}
                className="hover:bg-gray-100"
              >
                <Minimize2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-8xl px-4 py-6">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* 左侧边栏 */}
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

        {/* 主游戏区域 */}
        <div className="col-span-12 lg:col-span-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            {/* 游戏 iframe 容器 */}
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

            {/* 游戏信息栏 */}
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center space-x-3">
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
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 flex items-center">
                    {currentGame.title}
                    <div className="ml-3 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {currentGame.rating.toFixed(1)}
                      </span>
                    </div>
                  </h1>
                  <p className="text-sm text-gray-500">
                    {currentGame.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href={currentGame.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open</span>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="hover:bg-gray-100"
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className="col-span-12 lg:col-span-2">
          <div className="space-y-4">
            {recommendedGames.slice(2, 6).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* 移动端推荐游戏 */}
        <div className="col-span-12 lg:hidden space-y-6">
          <NavCard logoUrl={logoUrl} onSearchClick={onSearchClick} />
          <div className="grid grid-cols-2 gap-4">
            {recommendedGames.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContent;
