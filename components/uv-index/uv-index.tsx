import { IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function UvIndex({ weather }: { weather?: IWeather }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather && (
          <>
            {weather.current.uv}
            <div className="text-xl">{getUvText(weather.current.uv)}</div>
          </>
        )}
        {!weather && <Skeleton width="w-full" height="h-[1.2em]" />}
      </div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}

function getUvText(uv: number) {
  if (uv <= 2) {
    return "Low";
  } else if (uv <= 7) {
    return "Moderate";
  } else {
    return "High";
  }
}
