<script lang="ts">
  import { link } from "svelte-spa-router";
  import { fetchLibri, type Libro } from "../lib/api";
  import LoadingSpinner from "../lib/LoadingSpinner.svelte";
  import ErrorAlert from "../lib/ErrorAlert.svelte";
  import Pagination from "../lib/Pagination.svelte";
  import SearchBar from "../lib/SearchBar.svelte";

  let page = $state(1);
  let search = $state("");
  let searchInput = $state("");
  let items = $state<Libro[]>([]);
  let totalPages = $state(1);
  let loading = $state(true);
  let error = $state(false);

  function handleSearch() {
    search = searchInput;
    page = 1;
  }

  $effect(() => {
    const currentPage = page;
    const currentSearch = search;
    let cancelled = false;

    loading = true;
    error = false;

    fetchLibri(currentPage, currentSearch || undefined)
      .then((result) => {
        if (cancelled) return;
        items = result.items;
        totalPages = result.totalPages;
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

<h1 class="text-3xl font-bold text-base-content mb-6">Patrimonio Bibliografico</h1>

<SearchBar bind:value={searchInput} {loading} onSearch={handleSearch} />

{#if error}
  <ErrorAlert />
{/if}

{#if loading}
  <LoadingSpinner />
{:else if totalPages === 0}
  <p class="text-center py-8 opacity-60">Nessun risultato di ricerca.</p>
{:else}
  <div class="overflow-x-auto">
    <table class="table table-zebra table-lg w-full">
      <thead>
        <tr>
          <th>Titolo</th>
          <th>Autore</th>
          <th>Anno</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each items as item (item.id)}
          <tr>
            <td>{item.acf.titolo}</td>
            <td>{item.acf.autore}</td>
            <td>{item.acf.anno}</td>
            <td>
              <a
                href="/patrimonio/{item.id}"
                use:link
                class="link link-secondary"
                aria-label="Dettaglio {item.acf.titolo}"
              >
                Dettaglio
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <Pagination {page} {totalPages} onPageChange={(p) => (page = p)} />
{/if}
