<script lang="ts">
  import { cities } from "../../state/cities.svelte";
  import CityListItem from "./CityListItem.svelte";
</script>

<ul class="city-list">
  {#if cities.length === 0}
    <li class="empty-message">검색해 도시를 추가해보세요.</li>
  {:else}
    {#each cities as city (city.id)}
      <li><CityListItem {city} /></li>
    {/each}
  {/if}
</ul>

<style>
  .city-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    list-style: none;
    margin: 0;
  }

  .empty-message {
    color: gray;
    font-size: 12.5px;
  }
</style>
