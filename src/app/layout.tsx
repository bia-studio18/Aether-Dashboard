import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aether Dashboard",
  description: "Clean institutional data analytics dashboard built with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}