// components/hero-section.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-[#1A237E]">
              Discover Your Next
              <span className="text-[#00E5FF]"> Gaming </span>
              Adventure
            </h1>
            <p className="text-lg text-gray-600">
              Join thousands of players in exploring curated games from top
              developers worldwide.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#1A237E] hover:bg-[#00E5FF] text-white">
                Browse Games
              </Button>
              <Button
                variant="outline"
                className="border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative h-[400px]">
            <Image
              src="/api/placeholder/600/400"
              alt="Gaming Illustration"
              fill
              className="rounded-lg shadow-xl object-cover"
              quality={95}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
