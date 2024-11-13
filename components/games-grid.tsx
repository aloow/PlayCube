// components/games-grid.tsx
import type { Game } from "@/types";
import React from "react";
import GameCard from "./game-card";

interface GamesGridProps {
  games: Game[];
}

export const GamesGrid: React.FC<GamesGridProps> = ({ games }) => {
  return (
    <div className="container mx-auto max-w-8xl px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Featured Games</h1>
        <p className="mt-2 text-gray-600">Discover and play awesome games</p>
      </div>

      {/* 游戏网格 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* 如果没有游戏，显示提示信息 */}
      {games.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No games available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default GamesGrid;
