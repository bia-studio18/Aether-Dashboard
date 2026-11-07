import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { activity } from "@/lib/dummy-data";
import { Activity } from "lucide-react";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activity.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100">
                <Activity className="h-4 w-4 text-sage-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-charcoal truncate">
                  {item.action}
                </p>
                <p className="text-xs text-cool-gray mt-0.5">
                  {item.source} · {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}