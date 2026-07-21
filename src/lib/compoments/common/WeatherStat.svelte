<script lang="ts">
  let {
    label,
    value,
  }: {
    label: string;
    value: string;
  } = $props();
</script>

<div class="weather-stat">
  <span class="stat-label">{label}</span>
  <span class="stat-value">{value}</span>
</div>

<style>
  .weather-stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: oklch(0.55 0.01 260);
  }

  .stat-value {
    font-size: 20px;
    font-weight: 600;
  }
</style>
