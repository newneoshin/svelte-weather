// ApiResponse

export interface CurrentWeatherApiResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

export interface HourlyWeatherApiResponse {
  hourly: {
    time: string[];
    temperature_2m: number[];
    wind_speed_2m: number[];
    weather_code: number[];
    relative_humidity_2m: number[];
    uv_index: number[];
    surface_pressure: number[];
  };
}

// Processed

export interface CurrentWeather {
  temperature: number;
  weatherCode: number;
}

export interface HourlyWeatherItem {
  time: Date;
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  humidity: number;
  uvIndex: number;
  surfacePressure: number;
}

export interface HourlyWeather {
  items: HourlyWeatherItem[];
}
