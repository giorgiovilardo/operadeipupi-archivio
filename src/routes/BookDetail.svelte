<script lang="ts">
  import type { IdParams } from "../lib/types";
  import { fetchLibro, type Libro } from "../lib/api";
  import LoadingSpinner from "../lib/LoadingSpinner.svelte";
  import ErrorAlert from "../lib/ErrorAlert.svelte";

  let { params }: IdParams = $props();

  let book = $state<Libro | null>(null);
  let loading = $state(true);
  let error = $state(false);

  $effect(() => {
    const id = Number(params.id);
    let cancelled = false;

    loading = true;
    error = false;
    book = null;

    if (Number.isNaN(id)) {
      error = true;
      loading = false;
      return;
    }

    fetchLibro(id)
      .then((result) => {
        if (cancelled) return;
        book = result;
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
{:else if book}
  <h1 class="text-3xl font-bold text-base-content text-center mb-2">
    Scheda analitica libro:
  </h1>
  <h3 class="text-xl text-center mb-6">
    {book.acf.titolo}
  </h3>

  <div class="overflow-x-auto mb-8">
    <table class="table table-zebra table-lg w-full">
      <tbody>
        <tr>
          <td><strong>Titolo:</strong></td>
          <td>{book.acf.titolo}</td>
        </tr>
        <tr>
          <td><strong>Autore:</strong></td>
          <td>{book.acf.autore}</td>
        </tr>
        <tr>
          <td><strong>Anno:</strong></td>
          <td>{book.acf.anno}</td>
        </tr>
        <tr>
          <td><strong>Editore:</strong></td>
          <td>{book.acf.editore}</td>
        </tr>
        <tr>
          <td><strong>Pagg.:</strong></td>
          <td>{book.acf.pagine}</td>
        </tr>
        <tr>
          <td><strong>Parole chiave:</strong></td>
          <td>{book.acf.keywords}</td>
        </tr>
        <tr>
          <td><strong>Luogo:</strong></td>
          <td>{book.acf.luogo}</td>
        </tr>
        <tr>
          <td><strong>Collocazione:</strong></td>
          <td>{book.acf.collocazione}</td>
        </tr>
        <tr>
          <td><strong>Num. inventario:</strong></td>
          <td>{book.acf.inventario}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-4">
    <button class="btn btn-error" onclick={() => history.back()}>
      Torna indietro
    </button>
  </div>
{/if}
