import Weather from "@/components/weather/weather";
import { getWeatherCurrent } from "@/services/weather.service";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Suspense fallback={<Weather />}>
        {/* @ts-expect-error Server Component */}
        <Weather weatherPromise={getWeatherCurrent()} />
      </Suspense>
    </>
  );
}
