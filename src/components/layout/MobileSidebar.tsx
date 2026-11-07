"use client";

import {
  LayoutDashboard,
  Database,
  BarChart3,
  Settings,
  Layers,
  FileText,
  HelpCircle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", icon: LayoutDashboard, current: true },
  { name: "Data Sources", href: "#", icon: Database, current: false },
  { name: "Analytics", href: "#", icon: BarChart3, current: false },
  { name: "Pipelines", href: "#", icon: Layers, current: false },
  { name: "Reports", href: "#", icon: FileText, current: false },
];

const secondaryNav = [
  { name: "Settings", href: "#", icon: Settings },
  { name: "Help", href: "#", icon: HelpCircle },
];

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="relative z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between h-16 px-5 border-b border-sage-200">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-500">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-charcoal">Aether</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-cool-gray hover:bg-sage-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                item.current
                  ? "bg-sage-100 text-sage-600"
                  : "text-cool-gray hover:bg-sage-50 hover:text-charcoal"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-sage-200 space-y-1">
          {secondaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-cool-gray hover:bg-sage-50 hover:text-charcoal transition-colors"
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}