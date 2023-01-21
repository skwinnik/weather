import { IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function Humidity({ weather }: { weather?: IWeather }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather ? (
          weather.current.humidity + "%"
        ) : (
          <Skeleton width="w-full" height="h-[1.2em]" />
        )}
      </div>
      <div className="text-sm">
        {weather && (
          <>
            The dew point is{" "}
            {calc_dew_point(
              weather.current.temp_c,
              weather.current.humidity
            ).toFixed(0)}
            ° right now.
          </>
        )}
        {!weather && (
          <>
            <Skeleton width="w-full" /> <Skeleton width="w-full" />
          </>
        )}
      </div>
    </div>
  );
}

function calc_dew_point(temp: number, humidity: number) {
  const a = 17.27;
  const b = 237.7;
  const gamma = Math.log(humidity / 100) + (a * temp) / (b + temp);
  const dewPoint = (b * gamma) / (a - gamma);
  return dewPoint;
}
