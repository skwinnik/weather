"use client";
import Weather from "@/components/weather/weather";
import { getCurrentLocation } from "@/services/location.service";
import { IWeather } from "@/services/weather.service";
import { useEffect, useState } from "react";

const defaultLocation: GeolocationPosition = {
  coords: {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 51.52,
    longitude: -0.11,
    speed: 0,
  },
  timestamp: 0,
};

export default function Home() {
  async function getCurrentWeather() {
    let location: GeolocationPosition | undefined = undefined;
    try {
      location = await getCurrentLocation();
    } catch (e) {
      location = defaultLocation;
    }

    const res = await fetch(
      `/api/location-weather?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`
    );
    return res.json();
  }

  const [weatherPromise, setWeatherPromise] = useState<Promise<IWeather>>();
  useEffect(() => {
    setWeatherPromise(getCurrentWeather());
  }, []);

  return <Weather weatherPromise={weatherPromise} />;
}
