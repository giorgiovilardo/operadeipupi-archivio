<script lang="ts">
  import type { SlugIdParams } from "../lib/types";
  import { getCompanyBySlug } from "../lib/companies";
  import { fetchCompanyOpera, type Pupo } from "../lib/api";
  import LoadingSpinner from "../lib/LoadingSpinner.svelte";
  import ErrorAlert from "../lib/ErrorAlert.svelte";
  import PupoDetailTable from "../lib/PupoDetailTable.svelte";

  let { params }: SlugIdParams = $props();

  const company = $derived(getCompanyBySlug(params.slug));

  let opera = $state<Pupo | null>(null);
  let loading = $state(true);
  let error = $state(false);

  $effect(() => {
    const slug = params.slug;
    const id = Number(params.id);
    let cancelled = false;

    loading = true;
    error = false;
    opera = null;

    if (Number.isNaN(id)) {
      error = true;
      loading = false;
      return;
    }

    fetchCompanyOpera(slug, id)
      .then((result) => {
        if (cancelled) return;
        opera = result;
      })
      .catch(() => {
        if (cancelled) return;
        error = true;
      })
      .finally(() => {
        if (cancelled) return;
        loading = false;
      });

    return () => {
      cancelled = true;
    };
  });
</script>

{#if !company}
  <h1 class="text-3xl font-bold text-error mb-4">Compagnia non trovata</h1>
{:else if error}
  <ErrorAlert />
{:else if loading}
  <LoadingSpinner />
{:else if opera}
  <PupoDetailTable {opera} />
{/if}
