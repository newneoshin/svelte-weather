<script lang="ts">
  import type { HourlyForecast } from "../../types/weather";
  import WeatherStat from "../common/WeatherStat.svelte";

  const { hourlyForecast }: { hourlyForecast: HourlyForecast } = $props();
  const weatherStats = $derived([
    { label: "습도", value: `${hourlyForecast.items[0].humidity}%` },
    { label: "풍속", value: `${hourlyForecast.items[0].windSpeed}km/h` },
    { label: "기압", value: `${hourlyForecast.items[0].surfacePressure}hPa` },
    { label: "자외선", value: `${hourlyForecast.items[0].uvIndex}` },
  ]);
</script>

<div class="section-layout">
  <div class="current-weather-summary">
    {hourlyForecast.items[0].weatherCode}
    <div class="current-weather-text">
      <span class="current-weather-temperature">
        {hourlyForecast.items[0].temperature}
      </span>
      <span class="current-weather-code">
        {hourlyForecast.items[0].weatherCode}
      </span>
    </div>
  </div>
  <div class="current-weather-grid">
    {#each weatherStats as stat (stat.label)}
      <WeatherStat label={stat.label} value={stat.value} />
    {/each}
  </div>
</div>

<style>
  .section-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px;
    border-radius: 20px;
    background-color: white;
  }

  .current-weather-summary {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }

  .current-weather-temperature {
    font-size: 72px;
    font-weight: 700;
  }

  .current-weather-code {
    font-size: 17px;
    font-weight: 400;
  }

  .current-weather-text {
    display: flex;
    flex-direction: column;
  }

  .current-weather-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
</style>
