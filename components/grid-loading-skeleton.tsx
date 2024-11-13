// components/grid-loading-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const GridLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto max-w-8xl px-4 py-8">
      {/* 标题骨架 */}
      <div className="mb-8">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mt-2 h-6 w-96" />
      </div>

      {/* 游戏网格骨架 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLoadingSkeleton;
