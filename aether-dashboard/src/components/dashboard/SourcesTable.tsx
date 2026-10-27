import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { sources } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const statusStyles = {
  Healthy: "bg-[#E8F0E3] text-[#5C6B4F]",
  Warning: "bg-amber-50 text-amber-700",
  Error: "bg-red-50 text-[#E17055]",
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
            <tr className="border-b border-[#DDE5D8] text-left">
              <th className="pb-3 font-medium text-[#636E72]">Name</th>
              <th className="pb-3 font-medium text-[#636E72]">Type</th>
              <th className="pb-3 font-medium text-[#636E72]">Status</th>
              <th className="pb-3 font-medium text-[#636E72]">Records</th>
              <th className="pb-3 font-medium text-[#636E72]">Last Sync</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source) => (
              <tr
                key={source.id}
                className="border-b border-[#DDE5D8] last:border-0 hover:bg-[#F8F9F6] transition-colors"
              >
                <td className="py-3.5 font-medium text-[#2D3436]">
                  {source.name}
                </td>
                <td className="py-3.5 text-[#636E72]">{source.type}</td>
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
                <td className="py-3.5 text-[#636E72]">{source.records}</td>
                <td className="py-3.5 text-[#636E72]">{source.lastSync}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}