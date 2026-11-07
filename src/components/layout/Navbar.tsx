"use client";

import { Bell, Search, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-sage-200 bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 rounded-lg text-cool-gray hover:bg-sage-50 hover:text-charcoal transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cool-gray" />
          <input
            type="search"
            placeholder="Search datasets, sources..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-sage-200 bg-sage-50 text-sm text-charcoal placeholder:text-cool-gray focus:outline-none focus:ring-2 focus:ring-sage-500/40 focus:border-sage-500 transition-all"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="relative p-2 rounded-lg text-cool-gray hover:bg-sage-50 hover:text-charcoal transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-sage-500" />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-sage-200">
          <div className="h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center text-white text-sm font-medium">
            TS
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-charcoal">Tasbiha</p>
            <p className="text-xs text-cool-gray">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}