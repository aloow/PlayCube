"use client";

import { Card } from "@/components/ui/card";
import type { Game } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-lg transition-all duration-300">
      <Link href={game.link} className="block">
        {/* 游戏图片 */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />

          {/* 悬浮时显示的信息层 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* 游戏信息 */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{game.title}</h3>
              <div className="flex items-center space-x-1 text-white">
                <Star className="h-5 w-5 text-[#00E5FF]" />
                <span className="text-sm">{game.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* 卡片边框效果 */}
      <div className="absolute inset-0 rounded-lg border-2 border-[#9C27B0]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Card>
  );
};
