<script lang="ts">
  import type { IdParams } from "../lib/types";
  import { fetchPupo, type Pupo } from "../lib/api";
  import LoadingSpinner from "../lib/LoadingSpinner.svelte";
  import ErrorAlert from "../lib/ErrorAlert.svelte";
  import PupoDetailTable from "../lib/PupoDetailTable.svelte";

  let { params }: IdParams = $props();

  let opera = $state<Pupo | null>(null);
  let loading = $state(true);
  let error = $state(false);

  $effect(() => {
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

    fetchPupo(id)
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

{#if error}
  <ErrorAlert />
{/if}

{#if loading}
  <LoadingSpinner />
{:else if opera}
  <PupoDetailTable {opera} />
{/if}
