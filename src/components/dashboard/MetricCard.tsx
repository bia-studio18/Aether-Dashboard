import { Card, CardContent } from "@/components/ui/Card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  description: string;
}

export function MetricCard({
  title,
  value,
  change,
  positive,
  description,
}: MetricCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="pt-5">
        <p className="text-sm font-medium text-cool-gray mb-1">{title}</p>
        <div className="flex items-end justify-between gap-2">
          <h3 className="text-2xl font-semibold text-charcoal tracking-tight">
            {value}
          </h3>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap",
              positive
                ? "bg-sage-100 text-sage-600"
                : "bg-red-50 text-red-500"
            )}
          >
            {positive ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            {change}
          </div>
        </div>
        <p className="text-xs text-cool-gray mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}