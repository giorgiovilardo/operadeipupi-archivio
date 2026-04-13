<script lang="ts">
  let {
    value = $bindable(),
    loading,
    onSearch,
  }: {
    value: string;
    loading: boolean;
    onSearch: () => void;
  } = $props();
</script>

<div class="mb-6">
  <label class="label" for="search-input">Cerca nel database:</label>
  <div class="flex gap-2">
    <input
      id="search-input"
      type="text"
      class="input input-bordered flex-1"
      bind:value
      onkeyup={(e) => e.key === "Enter" && !loading && onSearch()}
    />
    <button class="btn btn-secondary" onclick={onSearch} disabled={loading}>
      Cerca
    </button>
  </div>
  <p class="text-sm opacity-60 mt-1">
    Cerca un lemma, un anno, un titolo...
  </p>
</div>
