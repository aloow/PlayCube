"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Game } from "@/types";
import { GameCard } from "./game-card";

interface GameRecommendationsProps {
  title?: string;
  games: Game[];
}

export const GameRecommendations = ({
  title = "Explore More Musical Adventures",
  games,
}: GameRecommendationsProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center text-red-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
