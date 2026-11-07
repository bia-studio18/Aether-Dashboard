"use client";

import {
  LayoutDashboard,
  Database,
  BarChart3,
  Settings,
  Layers,
  FileText,
  HelpCircle,
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

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-sage-200">
      {/* Logo */}
      <div className="flex items-center gap-2.5 h-16 px-6 border-b border-sage-200">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-500">
          <Layers className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-semibold text-charcoal tracking-tight">
          Aether
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
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

      {/* Secondary */}
      <div className="px-3 py-4 border-t border-sage-200 space-y-1">
        {secondaryNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-cool-gray hover:bg-sage-50 hover:text-charcoal transition-colors"
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}