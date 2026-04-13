<script lang="ts">
  import { link } from "svelte-spa-router";
  import { companies } from "../lib/companies";
</script>

<h1 class="text-3xl font-bold text-base-content mb-4">Le Compagnie</h1>
<p class="mb-6 text-base-content">
  Le famiglie di pupari che ancora oggi portano avanti la tradizione dell'Opera
  dei Pupi.
</p>

<ul class="space-y-2">
  {#each companies as company (company.slug)}
    <li>
      <a href="/compagnie/{company.slug}" use:link class="link link-secondary">
        {company.name}
      </a>
      <span class="text-sm opacity-60">— {company.city}</span>
    </li>
  {/each}
</ul>
