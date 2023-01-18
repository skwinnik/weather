import { IForecast } from "@/services/weather.service";

export default function Precipitation({
  precipitation,
  forecast,
}: {
  precipitation: number;
  forecast: IForecast;
}) {
  const nextPrecipitation = forecast.forecastday
    .slice(1)
    .filter((f) => f.day.totalprecip_mm > 0)[0];
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">{precipitation.toFixed(0)} mm</div>
      {nextPrecipitation && (
        <div className="text-sm">
          Next expected is {nextPrecipitation.day.totalprecip_mm.toFixed(0)} mm
          on {getDayOfWeek(new Date(nextPrecipitation.date))}
        </div>
      )}
    </div>
  );
}

function getDayOfWeek(date: Date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
}
