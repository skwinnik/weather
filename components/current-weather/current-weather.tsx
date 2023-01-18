import { IWeather } from "@/services/weather.service";

export default function CurrentWeather({
  weather,
  className,
}: {
  weather: IWeather;
  className?: string;
}) {
  return (
    <div className={`col-span-full text-center ${className}`}>
      <h1 className="text-3xl capitalize">{weather.location.name}</h1>
      <h2 className="text-2xl capitalize">
        {weather.current.temp_c}° | {weather.current.condition.text}
      </h2>
    </div>
  );
}
