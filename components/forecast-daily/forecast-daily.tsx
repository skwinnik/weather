import { IForecast, IForecastDayDay } from "@/services/weather.service";
import styles from "./forecast-daily.module.css";
export default function ForecastDaily({ forecast }: { forecast: IForecast }) {
  const min_temp = Math.min(
    ...forecast.forecastday.map((x) => x.day.mintemp_c)
  );
  const max_temp = Math.max(
    ...forecast.forecastday.map((x) => x.day.maxtemp_c)
  );

  return (
    <div>
      {forecast.forecastday.map((day, index) => (
        <ForecastDailyItem
          key={index}
          className="my-3"
          forecast={day.day}
          date={new Date(day.date)}
          overall_min_temp={min_temp}
          overall_max_temp={max_temp}
        />
      ))}
    </div>
  );
}

function ForecastDailyItem({
  overall_min_temp,
  overall_max_temp,
  forecast,
  date,
  className,
}: {
  overall_min_temp: number;
  overall_max_temp: number;
  forecast: IForecastDayDay;
  date: Date;
  className?: string;
}) {
  const isToday = new Date().getDate() === date.getDate();

  return (
    <div className={`${className} flex items-center justify-between`}>
      <div className="w-16">{isToday ? "Today" : getDayOfWeek(date)}</div>
      <div className="flex-auto flex-grow-0 flex-shrink-0 px-5">
        <img
          className="w-8 h-8"
          src={forecast.condition.icon}
          title={forecast.condition.text}
        ></img>
      </div>
      <div className="flex-grow">
        <TempRange
          min={forecast.mintemp_c}
          max={forecast.maxtemp_c}
          overall_max_temp={overall_max_temp}
          overall_min_temp={overall_min_temp}
        />
      </div>
    </div>
  );
}

function TempRange({
  overall_min_temp,
  overall_max_temp,
  min,
  max,
}: {
  overall_min_temp: number;
  overall_max_temp: number;
  min: number;
  max: number;
}) {
  const overall_range = overall_max_temp - overall_min_temp;
  const range = max - min;

  const width = (range / overall_range) * 100 + "%";
  const left = ((min - overall_min_temp) / overall_range) * 100 + "%";

  return (
    <div className="flex items-center justify-between">
      <div className="w-8">{min.toFixed(0)}°</div>
      <div className="flex-auto">
        <div className="w-full h-1 relative z-0">
          <div
            className={`h-full w-full absolute bg-primary-700/50 `}
            style={{ top: 0 }}
          ></div>
          <div
            className={`h-full absolute rounded-xl ${styles.gradient}`}
            style={{
              width,
              left,
              top: 0,
              backgroundPosition: -500,
              backgroundSize: 900,
            }}
          ></div>
        </div>
      </div>
      <div className="w-8 text-right">{max.toFixed(0)}°</div>
    </div>
  );
}

function getDayOfWeek(date: Date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
}
