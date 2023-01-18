import ForecastHourly from "@/components/forecast-hourly/forecast-hourly";
import Tile from "@/components/tile/tile";
import { getWeather } from "@/services/weather.service";

import { ClockIcon } from "@heroicons/react/24/outline";

export default async function Home() {
  const weather = await getWeather("Antalya", "Turkey", 3);

  //TODO redirect?
  if (!weather) return <div>Weather not found</div>;

  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4">
      <div className="col-span-6 text-center">
        <h1 className="text-3xl capitalize">{weather.location.name}</h1>
        <h2 className="text-2xl capitalize">
          {weather.current.temp_c}° | {weather.current.condition.text}
        </h2>
      </div>
      <Tile
        icon={<ClockIcon />}
        header="Hourly Forecast"
        className="col-span-6"
      >
        <ForecastHourly
          forecast_today={weather.forecast.forecastday[0]}
          forecast_tomorrow={weather.forecast.forecastday[1]}
          tz_id={weather.location.tz_id}
        />
      </Tile>
    </div>
  );
}
