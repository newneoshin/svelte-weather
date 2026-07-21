<script lang="ts">
  import {
    cities,
    currentWeatherMap,
    hourlyForecastMap,
    selection,
    weeklyForecastMap,
  } from "../../state/cities.svelte";

  const city = $derived(
    cities.find((c) => {
      return c.id == selection.cityId;
    }) ?? null,
  );

  const currentWeather = $derived(city ? currentWeatherMap[city.id] : null);
  const hourlyForecast = $derived(city ? hourlyForecastMap[city.id] : null);
  const weeklyForecast = $derived(city ? weeklyForecastMap[city.id] : null);
</script>

{#if city === null}
  <span>도시를 선택해주세요.</span>
{:else if !weeklyForecast}
  <span>불러오는 중입니다...</span>
{:else}
  <div>
    <span>{city?.name}</span>
    <span>최고: {weeklyForecast.items[0].temperatureMax}</span>
    <span>최저: {weeklyForecast.items[0].temperatureMin}</span>
  </div>
  <div>
    <span>주간 예보</span>
    {#each weeklyForecast.items as item}
      <span>날짜: {item.date} </span>
      <span>날씨: {item.weatherCode} </span>
      <span>최고: {item.temperatureMax} </span>
      <span>최저: {item.temperatureMin} </span>
    {/each}
  </div>
{/if}
