"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { barChartData } from "@/lib/dummy-data";

export function BarChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DDE5D8" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#636E72"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#636E72"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #DDE5D8",
                  borderRadius: "12px",
                  fontSize: "13px",
                }}
                cursor={{ fill: "#E8F0E3" }}
              />
              <Bar
                dataKey="value"
                fill="#87A96B"
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}