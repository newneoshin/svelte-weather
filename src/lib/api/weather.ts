import type {
  CurrentWeatherApiResponse,
  CurrentWeather,
  HourlyForecast,
  HourlyForecastApiResponse,
  HourlyForecastItem,
  WeeklyForecast,
  WeeklyForecastApiResponse,
  WeeklyForecastItem,
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
      date: new Date(time),
      temperature: data.hourly.temperature_2m[i],
      windSpeed: data.hourly.wind_speed_2m[i],
      weatherCode: data.hourly.weather_code[i],
      humidity: data.hourly.relative_humidity_2m[i],
      uvIndex: data.hourly.uv_index[i],
      surfacePressure: data.hourly.surface_pressure[i],
    }))
    .filter((item) => now <= item.date && item.date < in24h);
  return { items };
}

export async function getWeeklyForecast(
  lat: number,
  lon: number,
): Promise<WeeklyForecast> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_min,temperature_2m_max,uv_index_max,surface_pressure_mean,wind_speed_10m_mean,relative_humidity_2m_mean&timezone=GMT`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`주간 예보 조회 실패: ${response.status}`);

  const data: WeeklyForecastApiResponse = await response.json();
  const items: WeeklyForecastItem[] = data.daily.time.map((time, i) => ({
    date: new Date(time),
    temperatureMax: data.daily.temperature_2m_max[i],
    temperatureMin: data.daily.temperature_2m_min[i],
    weatherCode: data.daily.weather_code[i],
    uvIndex: data.daily.uv_index_max[i],
    surfacePressure: data.daily.surface_pressure_mean[i],
    humidity: data.daily.relative_humidity_2m_mean[i],
    windSpeed: data.daily.wind_speed_10m_mean[i],
  }));
  return { items };
}
