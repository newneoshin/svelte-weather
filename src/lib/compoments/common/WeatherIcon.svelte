<script lang="ts">
  import { getWeatherColor } from "../../utils/weatherCode";

  let {
    weatherCode,
    size = 38,
  }: {
    weatherCode: number;
    size?: number;
  } = $props();

  const color = $derived(getWeatherColor(weatherCode));
</script>

<div
  class="weather-icon"
  style="--weather-color: {color}; --icon-size: {size}px"
></div>

<style>
  .weather-icon {
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: calc(var(--icon-size) * 0.24);
    background-color: var(--weather-color, skyblue);
    flex-shrink: 0;
  }
</style>
