import Hero from "@/app/ui/Hero";
import { GameRecommendations } from "@/components/game-recommendations";
import gamesData from "@/public/data/games.json";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Feature /> */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Game Container */}
        <div className="lg:w-2/3">{/* Your game iframe content */}</div>

        {/* Recommendations Section */}
        <div className="lg:w-1/3">
          <GameRecommendations games={gamesData.games} />
        </div>
      </div>
    </main>
  );
}
