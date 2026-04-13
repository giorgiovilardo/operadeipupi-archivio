<script lang="ts">
  import type { Snippet } from "svelte";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  <main class="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
    {@render children()}
  </main>

  <Footer />
</div>
