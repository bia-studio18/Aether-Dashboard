# Aether Dashboard

A clean, modern, institutional-style data analytics dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

Designed with a soft **Sage Green** color theme for a professional and calm look.

**Live Demo:** (add your Vercel link after deployment)

---

### Features

- Responsive sidebar (collapses on mobile)
- Top navigation with search and notifications
- 4 Overview metric cards with trend indicators
- Interactive line chart (Data Ingestion Over Time)
- Interactive bar chart (Sources Breakdown)
- Data Sources table with status badges
- Recent Activity feed
- Soft Sage Green institutional design system
- Fully responsive (Desktop → Tablet → Mobile)

---

### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge

---

### Color Palette (Sage Green)

| Role            | Hex       |
|-----------------|-----------|
| Primary         | `#87A96B` |
| Primary Dark    | `#5C6B4F` |
| Primary Light   | `#E8F0E3` |
| Background      | `#F8F9F6` |
| Card            | `#FFFFFF` |
| Text Primary    | `#2D3436` |
| Text Secondary  | `#636E72` |
| Border          | `#DDE5D8` |

---

### Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   └── MobileSidebar.tsx
│   ├── dashboard/
│   │   ├── MetricCard.tsx
│   │   ├── LineChartCard.tsx
│   │   ├── BarChartCard.tsx
│   │   ├── SourcesTable.tsx
│   │   └── ActivityFeed.tsx
│   └── ui/
│       └── Card.tsx
└── lib/
    ├── utils.ts
    └── dummy-data.ts
```

---

### Author

**Tasbiha Shahzaib**  
Frontend Developer  

- GitHub: [bia-studio18](https://github.com/bia-studio18)
- Portfolio: [Personal Portfolio](https://bia-studio18.github.io/Personal-portfolio/)

---

Built with care for clean interfaces and data products.
