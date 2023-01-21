import { IWeather } from "@/services/weather.service";
import { CSSProperties } from "react";
import Skeleton from "../skeleton";

export function CurrentWeather({
  weather,
  style,
  className,
}: {
  weather?: IWeather;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`} style={style}>
      <h2 className="text-6xl font-thin capitalize">
        {weather && <>&nbsp;{weather.current.temp_c.toFixed(0)}°</>}
        {!weather && <Skeleton width="w-[2em]" height="h-[1em]" />}
      </h2>
      <h3 className="text-xl">
        {weather && weather.current.condition.text}
        {!weather && <Skeleton width="w-[6em]" height="h-[1.25em]" />}
      </h3>
      <h4 className="text-xl">
        {weather && (
          <>
            H:&nbsp;{weather.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}
            °&nbsp;&nbsp;L:&nbsp;
            {weather.forecast.forecastday[0].day.mintemp_c.toFixed(0)}°
          </>
        )}
        {!weather && <Skeleton width="w-[6em]" />}
      </h4>
    </div>
  );
}

export function CurrentWeatherCompact({
  weather,
  style,
  className,
}: {
  weather?: IWeather;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`} style={style}>
      <h2 className="text-2xl capitalize">
        {weather && (
          <>
            {weather.current.temp_c.toFixed(0)}° |{" "}
            {weather.current.condition.text}
          </>
        )}
        {!weather && <Skeleton />}
      </h2>
    </div>
  );
}

export function Location({
  weather,
  className,
}: {
  weather?: IWeather;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-3xl capitalize">
        {weather ? (
          weather.location.name
        ) : (
          <Skeleton width="w-[3em]" height="h-[1.25em]" />
        )}
      </h1>
    </div>
  );
}
