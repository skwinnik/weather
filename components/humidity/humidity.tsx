export default function Humidity({
  humidity,
  temp,
}: {
  humidity: number;
  temp: number;
}) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">{humidity}%</div>
      <div className="text-sm">
        The dew point is {calc_dew_point(temp, humidity).toFixed(0)}° right now.
      </div>
    </div>
  );
}

function calc_dew_point(temp: number, humidity: number) {
  const a = 17.27;
  const b = 237.7;
  const gamma = Math.log(humidity / 100) + (a * temp) / (b + temp);
  const dewPoint = (b * gamma) / (a - gamma);
  return dewPoint;
}
