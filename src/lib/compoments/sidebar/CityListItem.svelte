<script lang="ts">
  import type { City } from "../../types/city";
  import type { CurrentWeather } from "../../types/weather";
  import { getCurrentWeather } from "../../api/weather";
  import { selection, selectCity } from "../../state/cities.svelte";

  let { city }: { city: City } = $props();
  let currentWeather = $state<CurrentWeather | null>(null);
  let isSelected = $derived(city.id === selection.cityId);

  $effect(() => {
    getCurrentWeather(city.lat, city.lon).then((weather) => {
      currentWeather = weather;
    });
  });
</script>

<button
  class={["city-item", { isSelected }]}
  onclick={() => {
    selectCity(city);
  }}
>
  <div class="city-info">
    <div class="weather-icon"></div>
    <div class="city-text">
      <span class="city-name">{city.name}</span>
      <span class="weather-status">{currentWeather?.weatherCode}</span>
    </div>
  </div>
  <span class="city-temperature">
    {currentWeather?.temperature}°C
  </span>
</button>

<style>
  .weather-icon {
    background-color: skyblue;
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }

  .city-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    height: 64px;
    width: 100%;
    padding: 16px;

    border: none;
    background-color: transparent;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .city-item.isSelected {
    background-color: oklch(0.93 0.02 235);
    opacity: 1;
  }

  .city-item:focus-visible,
  .city-item:hover {
    box-shadow: inset 0 0 0 2px oklch(0.6 0.15 235);
  }

  .city-info {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .city-name {
    font-weight: bold;
    font-size: 15px;
  }

  .city-temperature {
    font-weight: bold;
    font-size: 20px;
  }

  .city-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .weather-status {
    color: gray;
    font-size: 12.5px;
    text-align: left;
  }
</style>
