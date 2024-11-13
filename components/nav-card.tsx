import { Card } from "@/components/ui/card";
import { Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface NavCardProps {
  logoUrl: string;
  logoAlt?: string;
  onSearchClick?: () => void;
  className?: string;
}

export const NavCard: FC<NavCardProps> = ({
  logoUrl,
  logoAlt = "Website Logo",
  onSearchClick,
  className = "",
}: NavCardProps) => {
  const handleSearchClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onSearchClick) {
      e.preventDefault();
      onSearchClick();
    }
  };

  return (
    <Card
      className={`flex h-32 items-center overflow-hidden rounded-lg border-2 border-[#9C27B0]/60 p-4 ${className}`}
    >
      {/* Logo Section (70%) */}
      <div className="w-[70%] pr-4">
        <div className="relative h-24 w-full">
          <Image
            src={logoUrl}
            alt={logoAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation Icons Section (30%) */}
      <div className="flex w-[30%] flex-col items-center justify-between space-y-4">
        {/* Home Icon */}
        <Link
          href="/"
          className="group rounded-full p-2 transition-all duration-300 hover:bg-[#00E5FF]/10"
          aria-label="Go to homepage"
        >
          <Home className="h-6 w-6 text-[#9C27B0] transition-colors duration-300 group-hover:text-[#00E5FF]" />
        </Link>

        {/* Search Icon */}
        <Link
          href="/search"
          className="group rounded-full p-2 transition-all duration-300 hover:bg-[#00E5FF]/10"
          onClick={handleSearchClick}
          aria-label="Open search"
        >
          <Search className="h-6 w-6 text-[#9C27B0] transition-colors duration-300 group-hover:text-[#00E5FF]" />
        </Link>
      </div>
    </Card>
  );
};

// Type-safe default export
export default NavCard;
