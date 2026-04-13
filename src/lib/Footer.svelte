<script lang="ts">
  import { link } from "svelte-spa-router";

  const allSponsors = Object.entries(
    import.meta.glob("../assets/sponsors/sponsor-*.png", {
      eager: true,
      import: "default",
    }),
  )
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/sponsor-(\d+)/)?.[1] ?? "0");
      const numB = parseInt(b.match(/sponsor-(\d+)/)?.[1] ?? "0");
      return numA - numB;
    })
    .map(([, src]) => src as string);

  const topRow = allSponsors.slice(0, 12);
  const bottomRow = allSponsors.slice(12);
</script>

<footer class="bg-secondary text-secondary-content mt-auto">
  <div
    class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    <!-- Navigation -->
    <nav class="md:border-l-2 md:border-neutral-content/30 md:pl-6">
      <ul class="space-y-2">
        <li>
          <a href="/" use:link class="link link-hover">L'Opera dei Pupi</a>
        </li>
        <li>
          <a href="/misuredisalvaguardia" use:link class="link link-hover"
            >Misure di salvaguardia</a
          >
        </li>
        <li>
          <a href="/compagnie" use:link class="link link-hover">Le Compagnie</a>
        </li>
        <li>
          <a href="/patrimonio" use:link class="link link-hover"
            >Patrimonio bibliografico</a
          >
        </li>
        <li><a href="/opere" use:link class="link link-hover">Le Opere</a></li>
        <li>
          <a href="/musei" use:link class="link link-hover">Il Museo</a>
        </li>
        <li>
          <a href="/contatti" use:link class="link link-hover"
            >Contatti e Mappe</a
          >
        </li>
      </ul>
    </nav>

    <!-- Contact info -->
    <div class="space-y-1">
      <p class="font-bold">
        Museo Internazionale delle Marionette Antonio Pasqualino
      </p>
      <p>Piazzetta Antonio Pasqualino 5 (trav. di via Butera), 90133 Palermo</p>
      <p>Tel: 091 328060</p>
      <p>
        <a
          href="mailto:mimap@museomarionettepalermo.it"
          class="link link-hover underline"
        >
          mimap@museomarionettepalermo.it
        </a>
      </p>
    </div>
  </div>

  <!-- Sponsor logos: single flex on mobile, 12+5 grid on desktop -->
  <div class="bg-white py-6 px-4">
    <!-- Mobile: all logos in a single wrapping row -->
    <div class="md:hidden flex flex-wrap justify-center gap-3 items-center">
      {#each allSponsors as src, i (i)}
        <img {src} alt="Sponsor" class="h-8 w-auto object-contain" />
      {/each}
    </div>
    <!-- Desktop: 12 top, 5 bottom centered -->
    <div class="hidden md:block max-w-7xl mx-auto space-y-4">
      <div class="grid grid-cols-12 gap-4 items-center">
        {#each topRow as src, i (i)}
          <img {src} alt="Sponsor" class="h-12 w-auto object-contain mx-auto" />
        {/each}
      </div>
      <div class="flex justify-between items-center">
        {#each bottomRow as src, i (i)}
          <img {src} alt="Sponsor" class="h-12 w-auto object-contain" />
        {/each}
      </div>
    </div>
  </div>
</footer>
