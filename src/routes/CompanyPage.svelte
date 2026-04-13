<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { SlugParams } from "../lib/types";
  import { getCompanyBySlug } from "../lib/companies";
  import { fetchCompanyOpere, type Pupo } from "../lib/api";
  import { companyDescriptions } from "../lib/companyDescriptions";
  import LoadingSpinner from "../lib/LoadingSpinner.svelte";
  import ErrorAlert from "../lib/ErrorAlert.svelte";
  import Pagination from "../lib/Pagination.svelte";
  import SearchBar from "../lib/SearchBar.svelte";

  let { params }: SlugParams = $props();

  const company = $derived(getCompanyBySlug(params.slug));
  const description = $derived(companyDescriptions[params.slug]);

  let page = $state(1);
  let search = $state("");
  let searchInput = $state("");
  let items = $state<Pupo[]>([]);
  let totalPages = $state(1);
  let loading = $state(true);
  let error = $state(false);
  let hasMaterials = $state(true);
  let initialLoad = $state(true);

  function handleSearch() {
    search = searchInput;
    page = 1;
  }

  // Reset state when navigating between companies
  $effect(() => {
    void params.slug;
    initialLoad = true;
    hasMaterials = true;
    page = 1;
    search = "";
    searchInput = "";
  });

  // Fetch data when slug, page, or search changes
  $effect(() => {
    const slug = params.slug;
    const currentPage = page;
    const currentSearch = search;
    let cancelled = false;

    loading = true;
    error = false;

    fetchCompanyOpere(slug, currentPage, currentSearch || undefined, 100)
      .then((result) => {
        if (cancelled) return;
        items = result.items;
        totalPages = result.totalPages;
        if (!currentSearch) hasMaterials = result.totalPages > 0;
        initialLoad = false;
      })
      .catch(() => {
        if (cancelled) return;
        error = true;
        initialLoad = false;
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
  <p class="text-base-content">
    Nessuna compagnia con slug: <code class="badge">{params.slug}</code>
  </p>
{:else}
  <h1 class="text-3xl font-bold text-base-content mb-4">
    {description?.title ?? company.name}
  </h1>

  {#if description}
    <div class="content-body mb-8">
      {#if description.logo}
        <img
          src="{import.meta.env.BASE_URL}companies/{description.logo}"
          alt=""
          class="float-left mr-5 mb-2 max-w-48"
        />
      {/if}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- static content from legacy app -->
      {@html description.html}
      {#if description.website}
        <p>
          <a
            href={description.website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {description.website.label}
          </a>
        </p>
      {/if}
    </div>
  {/if}

  {#if initialLoad}
    <LoadingSpinner />
  {:else if hasMaterials}
    <h2 class="text-xl font-bold mb-4">Collezione Materiali</h2>

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
              <th>Soggetto</th>
              <th>Tipo</th>
              <th>Datazione</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each items as item (item.id)}
              <tr>
                <td>{item.acf.soggetto}</td>
                <td>{item.acf.tipo}</td>
                <td>{item.acf.datazione}</td>
                <td>
                  <a
                    href="/compagnie/{params.slug}/{item.id}"
                    use:link
                    class="link link-secondary"
                    aria-label="Dettaglio {item.acf.soggetto}"
                  >
                    Dettaglio
                  </a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      {#if totalPages > 1}
        <Pagination {page} {totalPages} onPageChange={(p) => (page = p)} />
      {/if}
    {/if}
  {/if}
{/if}
