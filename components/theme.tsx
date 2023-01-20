import { IWeather } from "@/services/weather.service";
import { Day, Evening, Morning, Night, TempRange } from "@/themes/themes";
import { CSSProperties } from "react";
export function GetMetaColor(weather: IWeather): string {
  const theme = getCurrentTheme(weather);
  return theme.gradient.from;
}

export function GetThemeValues(weather: IWeather): CSSProperties {
  const theme = getCurrentTheme(weather);
  const temp = getCurrentTempRange();

  return {
    ["--color-gradient-from" as any]: theme.gradient.from,
    ["--color-gradient-to" as any]: theme.gradient.to,
    ["--color-primary-50" as any]: theme.primary["50_rgb"],
    ["--color-primary-100" as any]: theme.primary["100_rgb"],
    ["--color-primary-200" as any]: theme.primary["200_rgb"],
    ["--color-primary-300" as any]: theme.primary["300_rgb"],
    ["--color-primary-400" as any]: theme.primary["400_rgb"],
    ["--color-primary-500" as any]: theme.primary["500_rgb"],
    ["--color-primary-600" as any]: theme.primary["600_rgb"],
    ["--color-primary-700" as any]: theme.primary["700_rgb"],
    ["--color-primary-800" as any]: theme.primary["800_rgb"],
    ["--color-primary-900" as any]: theme.primary["900_rgb"],

    ["--color-temp-1" as any]: temp["1_rgb"],
    ["--color-temp-2" as any]: temp["2_rgb"],
    ["--color-temp-3" as any]: temp["3_rgb"],
    ["--color-temp-4" as any]: temp["4_rgb"],
    ["--color-temp-5" as any]: temp["5_rgb"],
    ["--color-temp-6" as any]: temp["6_rgb"],
    ["--color-temp-7" as any]: temp["7_rgb"],
    ["--color-temp-8" as any]: temp["8_rgb"],
    ["--color-temp-9" as any]: temp["9_rgb"],
    ["--color-temp-10" as any]: temp["10_rgb"],
    ["--color-temp-11" as any]: temp["11_rgb"],
    ["--color-temp-12" as any]: temp["12_rgb"],
    ["--color-temp-13" as any]: temp["13_rgb"],
    ["--color-temp-14" as any]: temp["14_rgb"],
    ["--color-temp-15" as any]: temp["15_rgb"],
  };

  // root.style.setProperty("--gradient-shift", "48rem");
}

function getCurrentTheme(weather: IWeather) {
  const localTime = new Date(weather.location.localtime);
  if (localTime.getHours() >= 6 && localTime.getHours() < 18) {
    return Day();
  }
  return Morning();
}

function getCurrentTempRange() {
  return TempRange();
}
