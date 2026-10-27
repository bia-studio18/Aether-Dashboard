"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { lineChartData } from "@/lib/dummy-data";

export function LineChartCard() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Data Ingestion Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DDE5D8" />
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
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#87A96B"
                strokeWidth={3}
                dot={{ fill: "#87A96B", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#5C6B4F" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}