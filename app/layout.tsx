import ScrollWatcher from "@/components/scroll-watcher";
import { GetMetaColor, GetThemeValues } from "@/components/theme";
import { getWeatherCurrent } from "@/services/weather.service";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const weather = await getWeatherCurrent();
  return (
    <html lang="en" style={GetThemeValues(weather)}>
      <head color={GetMetaColor(weather)} />
      <body className="p-8 sm:p-10 pt-0 sm:pt-0" data-scroll="false">
        <div className="bg-primary-gradient fixed left-0 bottom-0 w-full h-[100vh] -z-50 weather-transition"></div>
        <ScrollWatcher />
        {children}
      </body>
    </html>
  );
}
