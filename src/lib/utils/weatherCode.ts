interface WeatherCodeInfo {
  text: string;
  color: string;
}

const WEATHER_CODE_MAP: Record<number, WeatherCodeInfo> = {
  0: { text: "맑음", color: "oklch(0.85 0.15 90)" },
  1: { text: "대체로 맑음", color: "oklch(0.85 0.12 90)" },
  2: { text: "구름 조금", color: "oklch(0.8 0.05 235)" },
  3: { text: "흐림", color: "oklch(0.7 0.02 260)" },
  45: { text: "안개", color: "oklch(0.75 0.01 260)" },
  48: { text: "서리 안개", color: "oklch(0.75 0.01 260)" },
  51: { text: "이슬비", color: "oklch(0.7 0.08 235)" },
  53: { text: "이슬비", color: "oklch(0.65 0.1 235)" },
  55: { text: "이슬비", color: "oklch(0.6 0.12 235)" },
  56: { text: "어는 이슬비", color: "oklch(0.65 0.08 250)" },
  57: { text: "어는 이슬비", color: "oklch(0.6 0.1 250)" },
  61: { text: "비", color: "oklch(0.65 0.12 240)" },
  63: { text: "비", color: "oklch(0.55 0.14 240)" },
  65: { text: "비", color: "oklch(0.45 0.16 240)" },
  66: { text: "어는 비", color: "oklch(0.6 0.1 250)" },
  67: { text: "어는 비", color: "oklch(0.5 0.12 250)" },
  71: { text: "눈", color: "oklch(0.9 0.02 240)" },
  73: { text: "눈", color: "oklch(0.85 0.03 240)" },
  75: { text: "눈", color: "oklch(0.8 0.04 240)" },
  77: { text: "싸락눈", color: "oklch(0.85 0.02 240)" },
  80: { text: "소나기", color: "oklch(0.6 0.13 240)" },
  81: { text: "소나기", color: "oklch(0.5 0.15 240)" },
  82: { text: "소나기", color: "oklch(0.4 0.17 240)" },
  85: { text: "소낙눈", color: "oklch(0.85 0.03 240)" },
  86: { text: "소낙눈", color: "oklch(0.75 0.04 240)" },
  95: { text: "뇌우", color: "oklch(0.4 0.1 290)" },
  96: { text: "뇌우", color: "oklch(0.35 0.12 290)" },
  99: { text: "뇌우", color: "oklch(0.3 0.14 290)" },
};

const DEFAULT_WEATHER_INFO: WeatherCodeInfo = {
  text: "알 수 없음",
  color: "oklch(0.8 0.01 260)",
};

export function getWeatherText(code: number): string {
  return (WEATHER_CODE_MAP[code] ?? DEFAULT_WEATHER_INFO).text;
}

export function getWeatherColor(code: number): string {
  return (WEATHER_CODE_MAP[code] ?? DEFAULT_WEATHER_INFO).color;
}
