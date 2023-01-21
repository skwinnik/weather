import { getWeatherByLocation } from "@/services/weather.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const latitude = parseFloat(req.query.latitude as string);
  const longitude = parseFloat(req.query.longitude as string);
  const weather = await getWeatherByLocation(latitude, longitude);
  res.status(200).json(weather);
}
