import type {
  CurrentWeatherApiResponse,
  HourlyForecastApiResponse,
  WeeklyForecastApiResponse,
  CurrentWeather,
  HourlyForecastItem,
  HourlyForecast,
  WeeklyForecastItem,
  WeeklyForecast,
} from "../types/weather";

export async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<CurrentWeather> {
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=GMT`;
  const result = await fetch(URL);
  if (!result.ok) throw new Error(`현재 날씨 조회 실패 ${result.status}`);

  const data: CurrentWeatherApiResponse = await result.json();
  return {
    temperature: data.current.temperature_2m,
    weatherCode: data.current.weather_code,
  };
}
