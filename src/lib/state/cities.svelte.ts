import type { City } from "../types/city";

export const cities = $state<City[]>([]);
export let selectedCityId = $state<number | null>(null);

export function addCity(city: City) {
  if (cities.some((c) => c.id === city.id)) return;
  cities.push(city);
  selectedCityId = city.id;
}

export function removeCity(city: City) {
  const index = cities.findIndex((c) => c.id === city.id);
  if (index === -1) return;
  cities.splice(index, 1);

  if (selectedCityId === city.id) selectedCityId = null;
}

export function selectCity(city: City) {
  selectedCityId = city.id;
}
