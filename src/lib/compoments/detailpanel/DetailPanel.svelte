<script lang="ts">
  import { cities, selection } from "../../state/cities.svelte";
  import { getWeeklyForecast } from "../../api/weather";

  let city = $derived(
    cities.find((c) => {
      return c.id == selection.cityId;
    }) ?? null,
  );

  let weeklyPromise = $derived.by(() => {
    if (city === null) return null;
    return getWeeklyForecast(city.lat, city.lon);
  });
</script>

{#if weeklyPromise === null}
  <span>도시를 선택해주세요.</span>
{:else}
  {#await weeklyPromise}
    <span>불러오는 중입니다...</span>
  {:then forecast}
    <div>
      <span>{city?.name}</span>
      <span>최고: {forecast.items[0].temperatureMax}</span>
      <span>최저: {forecast.items[0].temperatureMin}</span>
    </div>
    <div>
      <span>주간 예보</span>
      {#each forecast.items as item}
        <span>날짜: {item.date} </span>
        <span>날씨: {item.weatherCode} </span>
        <span>최고: {item.temperatureMax} </span>
        <span>최저: {item.temperatureMin} </span>
      {/each}
    </div>
  {/await}
{/if}
