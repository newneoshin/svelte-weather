import type {
  NominatimResultItem,
  NominatimApiResponse,
  City,
} from "../types/city";

export async function getGeocode(name: string): Promise<City> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(name)}&format=jsonv2`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`도시 geocoding 실패: ${response.status}`);

  const data: NominatimApiResponse = await response.json();
  if (data.length == 0) throw new Error(`${name}에 대한 검색 결과가 없습니다.`);

  const item: NominatimResultItem = data[0];
  return {
    id: item.place_id,
    name: item.name,
    lat: Number(item.lat),
    lon: Number(item.lon),
  };
}
