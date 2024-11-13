// components/footer.tsx
"use client";

import { Facebook, Github, Heart, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  logoUrl: string;
}

const Footer: React.FC<FooterProps> = ({ logoUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#9C27B0]/60 bg-white">
      <div className="container mx-auto max-w-8xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Logo 和描述部分 */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src={logoUrl}
                  alt="PlayCube Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-[#1A237E]">
                PlayCube
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Your ultimate gaming destination. Play, discover, and connect with
              gamers from around the world. Experience the best browser games
              instantly.
            </p>
          </div>

          {/* 快速链接 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-[#1A237E]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {["Home", "Games", "Categories", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-[#00E5FF] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 支持链接 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-[#1A237E]">Support</h3>
            <ul className="mt-4 space-y-2">
              {["Help Center", "Terms", "Privacy", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-[#00E5FF] hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社交媒体和通讯 */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-[#1A237E]">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-4">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Github, href: "https://github.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-[#9C27B0]/60 p-2 text-[#1A237E] transition-all hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-[#1A237E]">Stay Updated</h4>
              <p className="mt-2 text-sm text-gray-600">
                Subscribe to our newsletter for the latest games and updates.
              </p>
              <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-lg border-2 border-[#9C27B0]/60 px-4 py-2 text-sm outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-[#00E5FF] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#00E5FF]/90 hover:shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 border-t border-[#9C27B0]/60 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 sm:flex-row sm:space-y-0">
            <div>© {currentYear} PlayCube. All rights reserved.</div>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#00E5FF]" />
              <span>by PlayCube Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
