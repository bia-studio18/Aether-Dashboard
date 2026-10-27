export const metrics = [
  {
    title: "Total Users",
    value: "24,582",
    change: "+12.5%",
    positive: true,
    description: "vs last month",
  },
  {
    title: "Active Sessions",
    value: "1,847",
    change: "+8.2%",
    positive: true,
    description: "currently online",
  },
  {
    title: "Data Volume",
    value: "84.2 TB",
    change: "+23.1%",
    positive: true,
    description: "ingested this month",
  },
  {
    title: "Error Rate",
    value: "0.42%",
    change: "-0.18%",
    positive: true,
    description: "vs last week",
  },
];

export const lineChartData = [
  { name: "Mon", value: 4200 },
  { name: "Tue", value: 3800 },
  { name: "Wed", value: 5100 },
  { name: "Thu", value: 4600 },
  { name: "Fri", value: 5800 },
  { name: "Sat", value: 3900 },
  { name: "Sun", value: 4500 },
];

export const barChartData = [
  { name: "API", value: 4200 },
  { name: "CSV", value: 3100 },
  { name: "DB Sync", value: 2800 },
  { name: "Webhooks", value: 1900 },
  { name: "Streams", value: 2400 },
];

export const sources = [
  {
    id: 1,
    name: "Production API",
    type: "REST",
    status: "Healthy",
    records: "1.2M",
    lastSync: "2 min ago",
  },
  {
    id: 2,
    name: "Customer CSV Upload",
    type: "File",
    status: "Healthy",
    records: "84.5K",
    lastSync: "15 min ago",
  },
  {
    id: 3,
    name: "Analytics DB",
    type: "PostgreSQL",
    status: "Warning",
    records: "3.8M",
    lastSync: "1 hour ago",
  },
  {
    id: 4,
    name: "Event Stream",
    type: "Kafka",
    status: "Healthy",
    records: "12.4M",
    lastSync: "Just now",
  },
  {
    id: 5,
    name: "Legacy CRM",
    type: "SOAP",
    status: "Error",
    records: "226K",
    lastSync: "3 hours ago",
  },
];

export const activity = [
  {
    id: 1,
    action: "New dataset ingested",
    source: "Production API",
    time: "2 minutes ago",
  },
  {
    id: 2,
    action: "Schema validation passed",
    source: "Customer CSV",
    time: "12 minutes ago",
  },
  {
    id: 3,
    action: "Sync completed",
    source: "Analytics DB",
    time: "1 hour ago",
  },
  {
    id: 4,
    action: "Connection restored",
    source: "Event Stream",
    time: "2 hours ago",
  },
  {
    id: 5,
    action: "Failed authentication",
    source: "Legacy CRM",
    time: "3 hours ago",
  },
];