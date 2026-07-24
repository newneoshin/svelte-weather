<script lang="ts">
  import type { HourlyForecast } from "../../types/weather";
  import HourlyForecastCard from "./HourlyForecastCard.svelte";

  const { hourlyForecast }: { hourlyForecast: HourlyForecast } = $props();
</script>

<div class="section-layout">
  <span class="section-title">시간별 예보</span>
  <div class="hourly-scroll">
    {#each hourlyForecast.items as item, i (item.date.toISOString())}
      <div class="hourly-item">
        <HourlyForecastCard {item} isNow={i === 0} />
      </div>
    {/each}
  </div>
</div>

<style>
  .section-layout {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 20px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 700;
  }

  .hourly-scroll {
    display: flex;
    gap: 32px;
    overflow-x: auto;
    padding: 32px 20px;
    background-color: white;
    border-radius: 16px;
  }

  .hourly-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 48px; /* 가로 스크롤 시 아이템이 찌그러지지 않도록 */
  }
</style>
