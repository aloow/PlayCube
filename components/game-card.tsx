"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { Game } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={game.link} className="block">
        <div className="relative h-24 w-full">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <CardContent className="p-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold mb-1 text-red-700">
              {game.title}
            </h3>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 mr-1" />
              <span>{game.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-600">{game.description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};
