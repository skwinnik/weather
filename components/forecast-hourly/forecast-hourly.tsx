import {
  IForecastDay,
  IForecastDayHour,
  IWeather,
} from "@/services/weather.service";
import Skeleton from "../skeleton";

export default function ForecastHourly({ weather }: { weather?: IWeather }) {
  const forecast_today = weather?.forecast.forecastday[0];
  const forecast_tomorrow = weather?.forecast.forecastday[1];
  const tz_id = weather?.location.tz_id;
  const current_hour = tz_id ? getCurrentHourForTZ(tz_id) : 0;
  const limit = 12;
  const hourly_forecasts: IForecastDayHour[] = [
    ...(forecast_today?.hour.filter(
      (c) => new Date(c.time).getHours() > current_hour
    ) || []),
    ...(forecast_tomorrow?.hour || []),
  ].slice(0, limit);
  return (
    <div className="flex justify-between overflow-auto">
      {hourly_forecasts.length > 0 &&
        hourly_forecasts.map((forecast, i) => (
          <ForecastHourlyItem
            className="mr-4"
            key={forecast.time}
            forecast={forecast}
          />
        ))}
      {hourly_forecasts.length === 0 && (
        <>
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
          <ForecastHourlyItemSkeleton className="mr-4" />
        </>
      )}
    </div>
  );
}

export function ForecastHourlyItem({
  forecast,
  className,
}: {
  forecast: IForecastDayHour;
  className?: string;
}) {
  const hour = new Date(forecast.time).getHours();
  const hour_text = `${hour.toFixed(0).padStart(2, "0")}`;
  return (
    <div className={`${className} flex flex-col items-center min-w-fit`}>
      <div>{hour_text}</div>
      <img
        className="w-8 h-8 my-3"
        src={forecast.condition.icon}
        title={forecast.condition.text}
      ></img>
      <div>{forecast.temp_c.toFixed(0)}°</div>
    </div>
  );
}

export function ForecastHourlyItemSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className} flex flex-col items-center min-w-fit`}>
      <div>
        <Skeleton width="w-[18px]" />
      </div>
      <div className="w-8 h-8 my-3">
        <Skeleton width="w-8" height="h-8" />
      </div>
      <div>
        <Skeleton width="w-[18px]" />
      </div>
    </div>
  );
}

const getCurrentHourForTZ = (tz_id: string) => {
  return getHourForTZ(new Date(), tz_id);
};

const getHourForTZ = (date: Date, tz_id: string) => {
  let local_date = date.toLocaleString("en-US", { timeZone: tz_id });
  return new Date(local_date).getHours();
};
