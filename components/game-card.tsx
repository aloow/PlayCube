// components/game-card.tsx
import { Card } from "@/components/ui/card";
import type { Game } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // 将游戏标题转换为 URL 友好的格式
  const urlFriendlyName = game.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    <Link href={`/${urlFriendlyName}`} passHref>
      <Card className="group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{game.title}</h3>
              <div className="flex items-center space-x-1 text-white">
                <Star className="h-5 w-5 text-[#00E5FF]" />
                <span className="text-sm">{game.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-white/80">{game.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
