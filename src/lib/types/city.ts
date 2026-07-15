export interface NominatimResultItem {
  place_id: number;
  name: string;
  lat: string;
  lon: string;
}

export type NominatimApiResponse = NominatimResultItem[];

export interface City {
  id: number;
  name: string;
  lat: number;
  lon: number;
}
