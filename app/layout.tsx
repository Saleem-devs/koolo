import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koōlo - Saving for the Life You Want",
  description:
    "One app, one save at a time. Smart savings platform protecting your money from inflation while keeping your dreams within reach.",
  keywords:
    "savings, fintech, Nigeria, inflation protection, stablecoin, financial freedom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-iowan">{children}</body>
    </html>
  );
}
