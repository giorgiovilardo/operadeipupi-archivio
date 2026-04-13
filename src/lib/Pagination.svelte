<script lang="ts">
  import { paginationPages } from "./pagination";

  let {
    page,
    totalPages,
    onPageChange,
  }: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  } = $props();

  let pages = $derived(paginationPages(page, totalPages));
</script>

{#if pages.length > 0}
  <div class="flex justify-center mt-6">
    <div class="join">
      <button
        class="join-item btn btn-lg"
        class:btn-disabled={page === 1}
        onclick={() => page > 1 && onPageChange(page - 1)}
        aria-label="Pagina precedente"
      >
        «
      </button>
      {#each pages as p, i (i)}
        {#if p === null}
          <button class="join-item btn btn-lg btn-disabled">…</button>
        {:else}
          <button
            class="join-item btn btn-lg"
            class:btn-active={p === page}
            onclick={() => onPageChange(p)}
          >
            {p}
          </button>
        {/if}
      {/each}
      <button
        class="join-item btn btn-lg"
        class:btn-disabled={page >= totalPages}
        onclick={() => page < totalPages && onPageChange(page + 1)}
        aria-label="Pagina successiva"
      >
        »
      </button>
    </div>
  </div>
{/if}
