import { IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function Wind({ weather }: { weather?: IWeather }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather && (
          <>
            {weather.current.wind_kph.toFixed(0)}
            <div className="text-xl">kmph</div>
          </>
        )}
        {!weather && <Skeleton width="w-full" height="h-[1.2em]" />}
      </div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}
