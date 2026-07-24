<script lang="ts">
  import type { HourlyForecastItem } from "../../types/weather";
  import WeatherIcon from "../common/WeatherIcon.svelte";

  let {
    item,
    isNow = false,
  }: {
    item: HourlyForecastItem;
    isNow?: boolean;
  } = $props();
</script>

<div class="hourly-item">
  <span class="hourly-time">
    {isNow ? "지금" : `${item.date.getHours()}시`}
  </span>
  <WeatherIcon weatherCode={item.weatherCode} size={34} />
  <span class="hourly-temp"> {Math.round(item.temperature)}°</span>
</div>

<style>
  .hourly-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 8px;
    min-width: 48px;
  }

  .hourly-time {
    font-size: 12.5px;
    color: oklch(0.55 0.01 260);
  }

  .hourly-temp {
    font-size: 16px;
    font-weight: 600;
  }
</style>
