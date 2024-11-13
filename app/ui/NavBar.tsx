// components/nav-bar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FileText, Home, Menu, Search, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavBarProps {
  logoUrl: string;
  onSearchClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ logoUrl, onSearchClick }) => {
  return (
    <nav className="border-b border-[#9C27B0]/60 bg-white">
      <div className="container mx-auto max-w-8xl">
        <div className="flex h-16 items-center justify-between px-4">
          {/* 左侧 Logo 和主导航 */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden text-xl font-bold text-[#1A237E] sm:inline-block">
                PlayCube
              </span>
            </Link>

            {/* 桌面端导航链接 */}
            <div className="hidden space-x-1 md:flex">
              <Button
                variant="ghost"
                className="text-[#1A237E] hover:bg-[#00E5FF]/10 hover:text-[#1A237E]"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="text-[#1A237E] hover:bg-[#00E5FF]/10 hover:text-[#1A237E]"
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button
                variant="ghost"
                className="text-[#1A237E] hover:bg-[#00E5FF]/10 hover:text-[#1A237E]"
                asChild
              >
                <Link href="/termsservice">
                  <FileText className="mr-2 h-4 w-4" />
                  Terms
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="text-[#1A237E] hover:bg-[#00E5FF]/10 hover:text-[#1A237E]"
                asChild
              >
                <Link href="/privacypolicy">
                  <Shield className="mr-2 h-4 w-4" />
                  Privacy
                </Link>
              </Button>
            </div>
          </div>

          {/* 右侧操作区 */}
          <div className="flex items-center space-x-2">
            {/* 搜索按钮（移动端） */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-[#00E5FF]/10"
              onClick={onSearchClick}
            >
              <Search className="h-5 w-5 text-[#1A237E]" />
            </Button>

            {/* 移动端菜单 */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-[#00E5FF]/10"
                >
                  <Menu className="h-5 w-5 text-[#1A237E]" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-[#9C27B0]/60"
              >
                <div className="mt-6 flex flex-col space-y-3">
                  <Button
                    variant="ghost"
                    className="justify-start text-[#1A237E] hover:bg-[#00E5FF]/10"
                    asChild
                  >
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#1A237E] hover:bg-[#00E5FF]/10"
                    onClick={onSearchClick}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#1A237E] hover:bg-[#00E5FF]/10"
                    asChild
                  >
                    <Link href="/termsservice">
                      <FileText className="mr-2 h-4 w-4" />
                      Terms
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-[#1A237E] hover:bg-[#00E5FF]/10"
                    asChild
                  >
                    <Link href="/privacypolicy">
                      <Shield className="mr-2 h-4 w-4" />
                      Privacy
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
