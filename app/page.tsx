import { getWeather } from '@/services/weather.service'
import styles from './page.module.css'

export default async function Home() {
  const weather = await getWeather('London', 'UK', 3);
  return (
    <main className={styles.main}>
      {JSON.stringify(weather)}
    </main>
  )
}
