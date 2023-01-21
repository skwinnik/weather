"use client";

import CloudCoverage from "@/components/cloud-coverage/cloud-coverage";
import {
  CurrentWeather,
  CurrentWeatherCompact,
  Location,
} from "@/components/current-weather/current-weather";
import FeelsLike from "@/components/feels-like/feels-like";
import ForecastDaily from "@/components/forecast-daily/forecast-daily";
import ForecastHourly from "@/components/forecast-hourly/forecast-hourly";
import Humidity from "@/components/humidity/humidity";
import Precipitation from "@/components/precipitation/precipitation";
import Pressure from "@/components/pressure/pressure";
import Tile from "@/components/tile/tile";
import UvIndex from "@/components/uv-index/uv-index";
import Visibility from "@/components/visibility/visibility";
import Wind from "@/components/wind/wind";
import { IWeather } from "@/services/weather.service";

import { ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import styles from "./weather.module.css";

export default function Weather({
  weatherPromise,
}: {
  weatherPromise?: Promise<IWeather>;
}) {
  const [weather, setWeather] = useState<IWeather | undefined>(undefined);
  weatherPromise?.then((weather) => setWeather(weather));
  return (
    <>
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 grid-rows-4-h-fixed gap-4 pb-16 xl:pb-0">
        <div className="col-span-full sticky top-0 pt-8 md:pt-8 z-40 bg-primary-gradient bg-[length:100vw_100vh]">
          <Location weather={weather} />
          <div className="relative w-full h-full">
            <CurrentWeather
              className={`${styles.showInitial} absolute top-0 w-full`}
              weather={weather}
            />
            <CurrentWeatherCompact
              className={`${styles.showScroll} absolute top-0 w-full`}
              // hide on load to avoid flash
              style={{ opacity: 0 }}
              weather={weather}
            />
          </div>
        </div>
        <div className="col-span-full"></div>
        <Tile
          icon={<ClockIcon />}
          header="Hourly Forecast"
          className="md:col-span-4 col-span-full"
        >
          <ForecastHourly weather={weather} />
        </Tile>
        <Tile
          icon={<ClockIcon />}
          header="10-day Forecast"
          className="md:col-span-2 col-span-full row-span-3"
        >
          <ForecastDaily weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Feels Like" className="col-span-1">
          <FeelsLike weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Humidity" className="col-span-1">
          <Humidity weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Visibility" className="col-span-1">
          <Visibility weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Pressure" className="col-span-1">
          <Pressure weather={weather} />
        </Tile>
        <Tile
          icon={<ClockIcon />}
          header="Precipitation"
          className="col-span-1"
        >
          <Precipitation weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="UV Index" className="col-span-1">
          <UvIndex weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Wind" className="col-span-1">
          <Wind weather={weather} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Clouds" className="col-span-1">
          <CloudCoverage weather={weather} />
        </Tile>
      </div>
    </>
  );
}
