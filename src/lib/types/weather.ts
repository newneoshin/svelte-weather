// ApiResponse

export interface CurrentWeatherApiResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

// Processed

export interface CurrentWeather {
  temperature: number;
  weather_code: number;
}
