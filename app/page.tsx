"use client";
import Weather from "@/components/weather/weather";
import { getCurrentLocation } from "@/services/location.service";
import { IWeather } from "@/services/weather.service";
import { ILocation } from "@/services/location.service";
import { useEffect, useState } from "react";

const defaultLocation: ILocation = {
  latitude: 51.52,
  longitude: -0.11,
};

export default function Home() {
  async function getCurrentWeather() {
    let location: ILocation = defaultLocation;
    try {
      location = await getCurrentLocation();
    } catch (e) {}

    const res = await fetch(
      `/api/location-weather?latitude=${location.latitude}&longitude=${location.longitude}`
    );
    return res.json();
  }

  const [weatherPromise, setWeatherPromise] = useState<Promise<IWeather>>();
  useEffect(() => {
    setWeatherPromise(getCurrentWeather());
  }, []);

  return <Weather weatherPromise={weatherPromise} />;
}
