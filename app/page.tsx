import CloudCoverage from "@/components/cloud-coverage/cloud-coverage";
import CurrentWeather from "@/components/current-weather/current-weather";
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
import { getWeather } from "@/services/weather.service";

import { ClockIcon } from "@heroicons/react/24/outline";

export default async function Home() {
  const weather = await getWeather("Antalya", "Turkey", 10);

  //TODO redirect?
  if (!weather) return <div>Weather not found</div>;

  return (
    <>
      <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 grid-rows-4-h-fixed gap-4">
        <CurrentWeather
          className="top-0 -mx-8 md:-mx-10 -mt-8 md:-mt-10 pt-8 md:pt-8 col-span-full z-10 sticky bg-primary-600"
          weather={weather}
        />
        <Tile
          icon={<ClockIcon />}
          header="Hourly Forecast"
          className="md:col-span-4 col-span-full"
        >
          <ForecastHourly
            forecast_today={weather.forecast.forecastday[0]}
            forecast_tomorrow={weather.forecast.forecastday[1]}
            tz_id={weather.location.tz_id}
          />
        </Tile>
        <Tile
          icon={<ClockIcon />}
          header="10-day Forecast"
          className="md:col-span-2 col-span-full row-span-3"
        >
          <ForecastDaily forecast={weather.forecast} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Feels Like" className="col-span-1">
          <FeelsLike temp={weather.current.feelslike_c} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Humidity" className="col-span-1">
          <Humidity
            humidity={weather.current.humidity}
            temp={weather.current.temp_c}
          />
        </Tile>
        <Tile icon={<ClockIcon />} header="Visibility" className="col-span-1">
          <Visibility distance={weather.current.vis_km} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Pressure" className="col-span-1">
          <Pressure pressure={weather.current.pressure_mb} />
        </Tile>
        <Tile
          icon={<ClockIcon />}
          header="Precipitation"
          className="col-span-1"
        >
          <Precipitation
            precipitation={weather.current.precip_mm}
            forecast={weather.forecast}
          />
        </Tile>
        <Tile icon={<ClockIcon />} header="UV Index" className="col-span-1">
          <UvIndex uv={weather.current.uv} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Wind" className="col-span-1">
          <Wind speed={weather.current.wind_kph} />
        </Tile>
        <Tile icon={<ClockIcon />} header="Clouds" className="col-span-1">
          <CloudCoverage cloud={weather.current.cloud} />
        </Tile>
      </div>
    </>
  );
}
