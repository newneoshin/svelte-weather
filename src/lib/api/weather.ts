import type {
  CurrentWeatherApiResponse,
  CurrentWeather,
  HourlyForecast,
  HourlyForecastApiResponse,
  HourlyForecastItem,
} from "../types/weather";

export async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<CurrentWeather> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=GMT`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`현재 날씨 조회 실패 ${response.status}`);

  const data: CurrentWeatherApiResponse = await response.json();
  return {
    temperature: data.current.temperature_2m,
    weatherCode: data.current.weather_code,
  };
}

export async function getHourlyForecast(
  lat: number,
  lon: number,
): Promise<HourlyForecast> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,wind_speed_10m,weather_code,relative_humidity_2m,uv_index,surface_pressure&timezone=GMT&forecast_days=2`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`시간별 예보 조회 실패: ${response.status}`);

  const data: HourlyForecastApiResponse = await response.json();
  const now = new Date();
  const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const items: HourlyForecastItem[] = data.hourly.time
    .map((time, i) => ({
      time: new Date(time),
      temperature: data.hourly.temperature_2m[i],
      windSpeed: data.hourly.wind_speed_2m[i],
      weatherCode: data.hourly.weather_code[i],
      humidity: data.hourly.relative_humidity_2m[i],
      uvIndex: data.hourly.uv_index[i],
      surfacePressure: data.hourly.surface_pressure[i],
    }))
    .filter((item) => item.time <= now && now < in24h);
  return { items };
}
