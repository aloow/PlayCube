// components/game-loading-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const GameLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto max-w-8xl px-4 py-6">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* 左侧边栏骨架 */}
        <div className="hidden lg:col-span-2 lg:block space-y-6">
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="aspect-video w-full rounded-lg" />
          </div>
        </div>

        {/* 主游戏区域骨架 */}
        <div className="col-span-12 lg:col-span-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <Skeleton className="aspect-[16/9] w-full" />
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧边栏骨架 */}
        <div className="col-span-12 lg:col-span-2">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-video w-full rounded-lg" />
            ))}
          </div>
        </div>

        {/* 移动端推荐游戏骨架 */}
        <div className="col-span-12 lg:hidden space-y-6">
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="aspect-video w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLoadingSkeleton;
