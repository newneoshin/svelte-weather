<script lang="ts">
  import { cities } from "../state/cities.svelte";
  import CityListItem from "./CityListItem.svelte";
</script>

<ul class="city-list">
  {#if cities.length === 0}
    <p class="empty-message">검색해 도시를 추가해보세요.</p>
  {:else}
    {#each cities as city (city.id)}
      <CityListItem {city} />
    {/each}
  {/if}
</ul>

<style>
  .city-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }

  .empty-message {
    color: gray;
    font-size: 12.5px;
  }
</style>
