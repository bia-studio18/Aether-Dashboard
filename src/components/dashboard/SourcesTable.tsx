import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { sources } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const statusStyles = {
  Healthy: "bg-sage-100 text-sage-600",
  Warning: "bg-amber-50 text-amber-700",
  Error: "bg-red-50 text-red-500",
};

export function SourcesTable() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Data Sources</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-sage-200 text-left">
              <th className="pb-3 font-medium text-cool-gray">Name</th>
              <th className="pb-3 font-medium text-cool-gray">Type</th>
              <th className="pb-3 font-medium text-cool-gray">Status</th>
              <th className="pb-3 font-medium text-cool-gray">Records</th>
              <th className="pb-3 font-medium text-cool-gray">Last Sync</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source) => (
              <tr
                key={source.id}
                className="border-b border-sage-200 last:border-0 hover:bg-sage-50 transition-colors"
              >
                <td className="py-3.5 font-medium text-charcoal">
                  {source.name}
                </td>
                <td className="py-3.5 text-cool-gray">{source.type}</td>
                <td className="py-3.5">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                      statusStyles[source.status as keyof typeof statusStyles]
                    )}
                  >
                    {source.status}
                  </span>
                </td>
                <td className="py-3.5 text-cool-gray">{source.records}</td>
                <td className="py-3.5 text-cool-gray">{source.lastSync}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}