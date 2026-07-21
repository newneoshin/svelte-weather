<script lang="ts">
  import { getGeocode } from "../../api/city";
  import { addCity } from "../../state/cities.svelte";
  import SearchBar from "./SearchBar.svelte";
  import CityList from "./CityList.svelte";

  async function handleCitySearch(query: string) {
    const city = await getGeocode(query);
    addCity(city);
  }
</script>

<div class="sidebar">
  <div class="sidebar-text">
    <span class="sidebar-subtitle">Weather</span>
    <span class="sidebar-title">도시별 날씨</span>
  </div>

  <SearchBar onSearch={handleCitySearch} placeholder="도시 검색 또는 추가" />
  <div class="city-list-scroll">
    <CityList />
  </div>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 360px;
    max-width: 100%;
    padding: 0px 8px;
    gap: 16px;
    border-right: 1px solid oklch(0.9 0.003 260);
    height: 100vh;
  }

  .sidebar-text {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid oklch(0.9 0.003 260);
  }

  .sidebar-subtitle {
    color: oklch(0.55 0.01 260);
    font-weight: 500;
    font-size: 13px;
  }

  .sidebar-title {
    font-weight: bold;
    font-size: 22px;
  }

  .city-list-scroll {
    flex: 1;
    overflow-y: auto;
  }
</style>
