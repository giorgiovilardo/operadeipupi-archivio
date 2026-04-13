<script lang="ts">
  import type { Pupo } from "./api";
  import { letterAdder } from "./letterAdder";

  let { opera }: { opera: Pupo } = $props();
</script>

<h1 class="text-3xl font-bold text-base-content text-center mb-2">
  Scheda analitica opera:
</h1>
<h3 class="text-xl text-center mb-6">
  Collezione {opera.acf.collezione} - {opera.acf.soggetto}
</h3>

<div class="overflow-x-auto mb-8">
  <table class="table table-zebra table-lg w-full">
    <tbody>
      <tr>
        <td><strong>Collezione:</strong></td>
        <td>{opera.acf.collezione}</td>
      </tr>
      <tr>
        <td><strong>Tipo:</strong></td>
        <td>{opera.acf.tipo}</td>
      </tr>
      <tr>
        <td><strong>Soggetto:</strong></td>
        <td>{opera.acf.soggetto}</td>
      </tr>
      <tr>
        <td><strong>Descrizione:</strong></td>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- CMS content -->
        <td>{@html opera.acf.descrizione}</td>
      </tr>
      <tr>
        <td><strong>Materiale ossatura:</strong></td>
        <td>{opera.acf.ossatura}</td>
      </tr>
      <tr>
        <td><strong>Materiale armatura:</strong></td>
        <td>{opera.acf.armatura}</td>
      </tr>
      <tr>
        <td><strong>Materiale testa:</strong></td>
        <td>{opera.acf.materiale_testa}</td>
      </tr>
      <tr>
        <td><strong>Dimensione piede - testa (cm.):</strong></td>
        <td>{opera.acf.dimensione_piede_testa}</td>
      </tr>
      <tr>
        <td><strong>Provenienza:</strong></td>
        <td>{opera.acf.provenienza}</td>
      </tr>
      <tr>
        <td><strong>Datazione:</strong></td>
        <td>{opera.acf.datazione}</td>
      </tr>
      <tr>
        <td><strong>Costruzione:</strong></td>
        <td>{opera.acf.costruzione}</td>
      </tr>
      <tr>
        <td><strong>Num. inventario:</strong></td>
        <td>{letterAdder(opera.acf.collezione)}{opera.acf.inventario}</td>
      </tr>
      <tr>
        <td><strong>Num. serie:</strong></td>
        <td>{opera.acf.serie}</td>
      </tr>
      <tr>
        <td><strong>Annotazioni:</strong></td>
        <td>{opera.acf.annotazioni}</td>
      </tr>
      <tr>
        <td><strong>Dimensioni piede - spalla (cm.):</strong></td>
        <td>{opera.acf.dimensione_piede_spalla}</td>
      </tr>
      <tr>
        <td><strong>Dimensioni piede - uncino (cm.):</strong></td>
        <td>{opera.acf.dimensione_piede_uncino}</td>
      </tr>
      <tr>
        <td><strong>Altre note:</strong></td>
        <td>{opera.acf.altre_note}</td>
      </tr>
    </tbody>
  </table>
</div>

{#if opera.acf.foto && opera.acf.foto.length > 0}
  <h3 class="text-xl font-bold mb-4">Photogallery:</h3>
  <div class="flex flex-wrap gap-4 mb-8">
    {#each opera.acf.foto as foto (foto.id)}
      <a href={foto.url} target="_blank" rel="noopener noreferrer">
        <img
          src={foto.sizes.medium}
          alt={foto.title}
          class="rounded"
        />
      </a>
    {/each}
  </div>
{/if}

<div class="mt-4">
  <button class="btn btn-error" onclick={() => history.back()}>
    Torna indietro
  </button>
</div>
