import { IForecast, IForecastDayDay } from "@/services/weather.service";

export default function ForecastDaily({ forecast }: { forecast: IForecast }) {
  return (
    <div>
      {forecast.forecastday.map((day, index) => (
        <ForecastDailyItem
          key={index}
          className="my-3"
          forecast={day.day}
          date={new Date(day.date)}
        />
      ))}
    </div>
  );
}

function ForecastDailyItem({
  forecast,
  date,
  className,
}: {
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
        <TempRange min={forecast.mintemp_c} max={forecast.maxtemp_c} />
      </div>
    </div>
  );
}

function TempRange({ min, max }: { min: number; max: number }) {
  return (
    <div className="flex justify-between">
      <div className="flex-auto flex-grow-0">{min.toFixed(0)}°</div>
      <div className="flex-auto flex-grow-0">{max.toFixed(0)}°</div>
    </div>
  );
}

function getDayOfWeek(date: Date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
}
