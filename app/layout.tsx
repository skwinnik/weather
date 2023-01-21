"use client";
import ScrollWatcher from "@/components/scroll-watcher";
import { GetMetaColor, GetThemeValuesByTime } from "@/components/theme";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = useState<Date | undefined>();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <html lang="en" style={date && GetThemeValuesByTime(date)}>
      <head color={date && GetMetaColor(date)} />
      <body className="p-8 sm:p-10 pt-0 sm:pt-0" data-scroll="false">
        <div className="bg-primary-gradient fixed left-0 bottom-0 w-full h-[100vh] -z-50 weather-transition"></div>
        <ScrollWatcher />
        {children}
      </body>
    </html>
  );
}
