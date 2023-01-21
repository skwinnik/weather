import { IForecast, IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function Precipitation({ weather }: { weather?: IWeather }) {
  const nextPrecipitation = weather
    ? weather.forecast.forecastday
        .slice(1)
        .filter((f) => f.day.totalprecip_mm > 0)[0]
    : null;
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather && weather.current.precip_mm.toFixed(0) + " mm"}
        {!weather && <Skeleton width="w-full" height="h-[1.2em]" />}
      </div>
      <div className="text-sm">
        {nextPrecipitation && (
          <>
            Next expected is {nextPrecipitation.day.totalprecip_mm.toFixed(0)}{" "}
            mm on {getDayOfWeek(new Date(nextPrecipitation.date))}
          </>
        )}
        {!weather && (
          <>
            {" "}
            <Skeleton width="w-full" /> <Skeleton width="w-full" />
          </>
        )}
      </div>
    </div>
  );
}

function getDayOfWeek(date: Date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
}
