import { IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function Pressure({ weather }: { weather?: IWeather }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather && (
          <div>
            {weather.current.pressure_mb.toFixed(0)}
            <div className="text-xl">hPa</div>
          </div>
        )}
        {!weather && <Skeleton width="w-full" height="h-[1.2em]" />}
      </div>
    </div>
  );
}
