<script lang="ts">
  import Sidebar from "./lib/compoments/sidebar/Sidebar.svelte";
  import DetailPanel from "./lib/compoments/detailpanel/DetailPanel.svelte";
</script>

<div class="app-layout">
  <Sidebar />
  <main class="content">
    <DetailPanel />
  </main>
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
</style>
