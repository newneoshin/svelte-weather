// ApiResponse

export interface CurrentWeatherApiResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

export interface HourlyForecastApiResponse {
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

export interface WeeklyForecastApiResponse {
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    uv_index_max: number[];
    surface_pressure_mean: number[];
    relative_humidity_2m_mean: number[];
    wind_speed_10m_mean: number[];
  };
}

// Processed

export interface CurrentWeather {
  temperature: number;
  weatherCode: number;
}

export interface HourlyForecastItem {
  date: Date;
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  humidity: number;
  uvIndex: number;
  surfacePressure: number;
}

export interface HourlyForecast {
  items: HourlyForecastItem[];
}

export interface WeeklyForecastItem {
  date: Date;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
  uvIndex: number;
  surfacePressure: number;
  humidity: number;
  windSpeed: number;
}

export interface WeeklyForecast {
  items: WeeklyForecastItem[];
}
