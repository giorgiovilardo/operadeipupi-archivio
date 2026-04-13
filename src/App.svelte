<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "./lib/router";
  import Layout from "./lib/Layout.svelte";
</script>

<Layout>
  <Router {routes} restoreScrollState={true} />
</Layout>
