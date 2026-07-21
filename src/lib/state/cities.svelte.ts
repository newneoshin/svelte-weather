import { getAllWeather } from "../api/weather";
import type { City } from "../types/city";
import type {
  CurrentWeather,
  HourlyForecast,
  WeeklyForecast,
} from "../types/weather";

export const cities = $state<City[]>([]);
export let selection = $state<{ cityId: number | null }>({ cityId: null });

export const currentWeatherMap = $state<Record<number, CurrentWeather>>({});
export const hourlyForecastMap = $state<Record<number, HourlyForecast>>({});
export const weeklyForecastMap = $state<Record<number, WeeklyForecast>>({});

export async function addCity(city: City) {
  if (cities.some((c) => c.id === city.id)) return;
  cities.push(city);
  selection.cityId = city.id;

  const bundle = await getAllWeather(city.lat, city.lon);

  currentWeatherMap[city.id] = bundle.current;
  hourlyForecastMap[city.id] = bundle.hourly;
  weeklyForecastMap[city.id] = bundle.weekly;
}

export function removeCity(city: City) {
  const index = cities.findIndex((c) => c.id === city.id);
  if (index === -1) return;
  cities.splice(index, 1);

  delete currentWeatherMap[city.id];
  delete hourlyForecastMap[city.id];
  delete weeklyForecastMap[city.id];

  if (selection.cityId === city.id) selection.cityId = null;
}

export function selectCity(city: City) {
  selection.cityId = city.id;
}
