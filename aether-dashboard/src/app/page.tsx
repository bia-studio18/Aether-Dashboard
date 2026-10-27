"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { LineChartCard } from "@/components/dashboard/LineChartCard";
import { BarChartCard } from "@/components/dashboard/BarChartCard";
import { SourcesTable } from "@/components/dashboard/SourcesTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { metrics } from "@/lib/dummy-data";

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9F6]">
      <Sidebar />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="lg:pl-64">
        <Navbar onMenuClick={() => setMobileOpen(true)} />

        <main className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#2D3436] tracking-tight">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-[#636E72]">
              Overview of your data platform performance
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <LineChartCard />
            <BarChartCard />
          </div>

          {/* Table + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SourcesTable />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
