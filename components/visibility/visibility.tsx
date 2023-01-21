import { IWeather } from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function Visibility({ weather }: { weather?: IWeather }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {weather && <>{weather?.current.vis_km.toFixed(0)} km</>}
        {!weather && <Skeleton width="w-full" height="h-[1.2em]" />}
      </div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}
