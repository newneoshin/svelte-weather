<script lang="ts">
  let inputValue = $state("");
  let isLoading = $state(false);
  let {
    onSearch,
    placeholder = "검색",
  }: {
    onSearch: (query: string) => void | Promise<void>;
    placeholder?: string;
  } = $props();

  async function handleSearch() {
    const query = inputValue.trim();
    if (!query) return;
    isLoading = true;

    try {
      await onSearch(query);
      inputValue = "";
    } finally {
      isLoading = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key == "Enter") handleSearch();
  }
</script>

<div class="search-bar">
  <div class="circle-icon"></div>
  <input
    bind:value={inputValue}
    class="city-input"
    {placeholder}
    onkeydown={handleKeyDown}
    disabled={isLoading}
  />
</div>

<style>
  .search-bar {
    display: flex;
    padding: 0px 8px;
    gap: 4px;
    align-items: center;
    border-radius: 16px;
    background-color: oklch(0.95 0.003 260);
    height: 43px;
    border: 1px solid oklch(0.9 0.003 260);
  }

  .circle-icon {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid oklch(0.55 0.01 260);
  }

  .city-input {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    color: inherit;
    width: 100%;
    font-size: 14px;
  }
</style>
