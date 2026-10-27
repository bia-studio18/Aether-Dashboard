"use client";

import { Bell, Search, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#DDE5D8] bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 rounded-lg text-[#636E72] hover:bg-[#F8F9F6] hover:text-[#2D3436] transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#636E72]" />
          <input
            type="search"
            placeholder="Search datasets, sources..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-[#DDE5D8] bg-[#F8F9F6] text-sm text-[#2D3436] placeholder:text-[#636E72] focus:outline-none focus:ring-2 focus:ring-[#87A96B]/40 focus:border-[#87A96B] transition-all"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="relative p-2 rounded-lg text-[#636E72] hover:bg-[#F8F9F6] hover:text-[#2D3436] transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#87A96B]" />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-[#DDE5D8]">
          <div className="h-8 w-8 rounded-full bg-[#87A96B] flex items-center justify-center text-white text-sm font-medium">
            TS
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-[#2D3436]">Tasbiha</p>
            <p className="text-xs text-[#636E72]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}