import { getWeather } from "@/services/weather.service";
import styles from "./page.module.css";
export default async function Home() {
  const weather = await getWeather("Antalya", "Turkey", 3);

  //TODO redirect?
  if (!weather) return <div>Weather not found</div>;

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <h1 className="text-3xl capitalize">{weather.location.name}</h1>
        <h2 className="text-2xl capitalize">
          {weather.current.temp_c}° | {weather.current.condition.text}
        </h2>
      </div>
    </div>
  );
}
