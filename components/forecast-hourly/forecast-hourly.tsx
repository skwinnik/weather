import { IForecastDay, IForecastDayHour } from "@/services/weather.service";

export default function ForecastHourly({
  forecast_today,
  forecast_tomorrow,
  tz_id,
}: {
  forecast_today: IForecastDay;
  forecast_tomorrow: IForecastDay;
  tz_id: string;
}) {
  const current_hour = getCurrentHourForTZ(tz_id);
  const limit = 12;
  const hourly_forecasts: IForecastDayHour[] = [
    ...forecast_today.hour.filter(
      (c) => new Date(c.time).getHours() > current_hour
    ),
    ...forecast_tomorrow.hour,
  ].slice(0, limit);
  return (
    <div className="flex justify-between overflow-auto">
      {hourly_forecasts.map((forecast, i) => (
        <ForecastHourlyItem
          className="mr-4"
          key={forecast.time}
          forecast={forecast}
        />
      ))}
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

const getCurrentHourForTZ = (tz_id: string) => {
  return getHourForTZ(new Date(), tz_id);
};

const getHourForTZ = (date: Date, tz_id: string) => {
  let local_date = date.toLocaleString("en-US", { timeZone: tz_id });
  return new Date(local_date).getHours();
};
