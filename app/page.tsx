// app/page.tsx
"use client";

import NavBar from "@/app/ui/NavBar";
import GameContent from "@/components/game-content";
import { useEffect, useState } from "react";

export default function Home() {
  const [defaultGame, setDefaultGame] = useState<string>("");

  useEffect(() => {
    // 加载游戏数据并设置默认游戏
    const loadDefaultGame = async () => {
      try {
        const response = await fetch("/data/games.json");
        const data = await response.json();
        // 设置第一个游戏为默认游戏
        if (data.games && data.games.length > 0) {
          setDefaultGame(data.games[0].id);
        }
      } catch (error) {
        console.error("Error loading default game:", error);
      }
    };

    loadDefaultGame();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar
        logoUrl="/img/logo.png"
        onSearchClick={() => {
          console.log("Search clicked");
        }}
      />
      <GameContent
        currentGameId={defaultGame}
        logoUrl="/img/logo.png"
        onSearchClick={() => {
          // 处理搜索点击
          console.log("Search clicked");
        }}
      />
    </main>
  );
}
