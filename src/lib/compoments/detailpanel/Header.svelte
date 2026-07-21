<script lang="ts">
  import type { CurrentWeather, WeeklyForecast } from "../../types/weather";
  import type { City } from "../../types/city";
  const {
    city,
    currentWeather,
    weeklyForecast,
  }: {
    city: City;
    currentWeather: CurrentWeather;
    weeklyForecast: WeeklyForecast;
  } = $props();
</script>

<div class="header-layout">
  <div class="city-layout">
    <span class="updated-time">{currentWeather.date}</span>
    <span class="city-title">{city.name}</span>
  </div>
  <div class="temperature-content">
    최고 {weeklyForecast.items[0].temperatureMax}°·최저 {weeklyForecast.items[0]
      .temperatureMin}°
  </div>
</div>

<style>
  .header-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .city-layout {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .updated-time {
    font-size: 14px;
    font-weight: 500;
    color: oklch(0.55 0.01 260);
  }

  .city-title {
    font-size: 34px;
    font-weight: 800;
  }

  .temperature-content {
    font-size: 13px;
    font-weight: 400;
    color: oklch(0.55 0.01 260);
  }
</style>
