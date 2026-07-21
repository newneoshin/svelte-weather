import type { City } from "../types/city";

export const cities = $state<City[]>([]);
export let selection = $state<{ cityId: number | null }>({ cityId: null });

export function addCity(city: City) {
  if (cities.some((c) => c.id === city.id)) return;
  cities.push(city);
  selection.cityId = city.id;
}

export function removeCity(city: City) {
  const index = cities.findIndex((c) => c.id === city.id);
  if (index === -1) return;
  cities.splice(index, 1);

  if (selection.cityId === city.id) selection.cityId = null;
}

export function selectCity(city: City) {
  selection.cityId = city.id;
}
