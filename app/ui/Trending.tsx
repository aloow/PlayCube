// components/trending-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function TrendingSection() {
  const trendingGames = [
    {
      title: "Cyber Adventures",
      category: "Action",
      players: "10K+",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Space Warriors",
      category: "Strategy",
      players: "8K+",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Mystery Island",
      category: "Adventure",
      players: "15K+",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingGames.map((game, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                  {game.title}
                </h3>
                <div className="flex justify-between text-gray-600">
                  <span>{game.category}</span>
                  <span>{game.players} Players</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
