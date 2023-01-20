import { IWeather } from "@/services/weather.service";

export function CurrentWeather({
  weather,
  className,
}: {
  weather: IWeather;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-6xl font-thin capitalize">
        &nbsp;{weather.current.temp_c.toFixed(0)}°
      </h2>
      <h3 className="text-xl">{weather.current.condition.text}</h3>
      <h4 className="text-xl">
        H:&nbsp;{weather.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}
        °&nbsp;&nbsp;L:&nbsp;
        {weather.forecast.forecastday[0].day.mintemp_c.toFixed(0)}°
      </h4>
    </div>
  );
}

export function CurrentWeatherCompact({
  weather,
  className,
}: {
  weather: IWeather;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl capitalize">
        {weather.current.temp_c.toFixed(0)}° | {weather.current.condition.text}
      </h2>
    </div>
  );
}

export function Location({
  weather,
  className,
}: {
  weather: IWeather;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-3xl capitalize">{weather.location.name}</h1>
    </div>
  );
}
