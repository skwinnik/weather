"use client";
import { Day, Evening, TempRange } from "@/themes/themes";
import { useEffect } from "react";
export default function Theme() {
  const theme = getCurrentTheme();
  const temp = getCurrentTempRange();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary-50", theme.primary["50_rgb"]);
    root.style.setProperty("--color-primary-100", theme.primary["100_rgb"]);
    root.style.setProperty("--color-primary-200", theme.primary["200_rgb"]);
    root.style.setProperty("--color-primary-300", theme.primary["300_rgb"]);
    root.style.setProperty("--color-primary-400", theme.primary["400_rgb"]);
    root.style.setProperty("--color-primary-500", theme.primary["500_rgb"]);
    root.style.setProperty("--color-primary-600", theme.primary["600_rgb"]);
    root.style.setProperty("--color-primary-700", theme.primary["700_rgb"]);
    root.style.setProperty("--color-primary-800", theme.primary["800_rgb"]);
    root.style.setProperty("--color-primary-900", theme.primary["900_rgb"]);

    root.style.setProperty("--color-temp-1", temp["1_rgb"]);
    root.style.setProperty("--color-temp-2", temp["2_rgb"]);
    root.style.setProperty("--color-temp-3", temp["3_rgb"]);
    root.style.setProperty("--color-temp-4", temp["4_rgb"]);
    root.style.setProperty("--color-temp-5", temp["5_rgb"]);
    root.style.setProperty("--color-temp-6", temp["6_rgb"]);
    root.style.setProperty("--color-temp-7", temp["7_rgb"]);
    root.style.setProperty("--color-temp-8", temp["8_rgb"]);
    root.style.setProperty("--color-temp-9", temp["9_rgb"]);
    root.style.setProperty("--color-temp-10", temp["10_rgb"]);
    root.style.setProperty("--color-temp-11", temp["11_rgb"]);
    root.style.setProperty("--color-temp-12", temp["12_rgb"]);
    root.style.setProperty("--color-temp-13", temp["13_rgb"]);
    root.style.setProperty("--color-temp-14", temp["14_rgb"]);
    root.style.setProperty("--color-temp-15", temp["15_rgb"]);
  });
  return <></>;
}

function getCurrentTheme() {
  return Evening();
}

function getCurrentTempRange() {
  return TempRange();
}
