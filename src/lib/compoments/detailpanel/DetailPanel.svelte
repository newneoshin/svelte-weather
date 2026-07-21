<script lang="ts">
  import {
    cities,
    currentWeatherMap,
    hourlyForecastMap,
    selection,
    weeklyForecastMap,
  } from "../../state/cities.svelte";

  import Header from "./Header.svelte";
  import CurrentWeatherSection from "./CurrentWeatherSection.svelte";

  const city = $derived(
    cities.find((c) => {
      return c.id == selection.cityId;
    }) ?? null,
  );

  const currentWeather = $derived(city ? currentWeatherMap[city.id] : null);
  const hourlyForecast = $derived(city ? hourlyForecastMap[city.id] : null);
  const weeklyForecast = $derived(city ? weeklyForecastMap[city.id] : null);
</script>

<div class="panel-layout">
  {#if city === null}
    <span>도시를 선택해주세요.</span>
  {:else if !weeklyForecast || !currentWeather || !hourlyForecast}
    <span>불러오는 중입니다...</span>
  {:else}
    <Header {city} {currentWeather} {weeklyForecast} />
    <div>
      <CurrentWeatherSection {hourlyForecast} />
    </div>
  {/if}
</div>

<style>
  .panel-layout {
    background-color: oklch(0.95 0.003 260);
    padding: 32px 48px;
  }
</style>
