<script lang="ts">
  import { link } from "svelte-spa-router";
  import { companies } from "./companies";
  import logo from "../assets/logo-opera.png";
  import ministero from "../assets/ministerologo.png";
  import museo from "../assets/museologo.png";
  import hero from "../assets/hero.jpg";

  let compagnieOpen = $state(false);

  function closeDropdown() {
    compagnieOpen = false;
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
</script>

<!-- Top sponsor strip -->
<div class="flex flex-wrap items-center gap-4 p-4 bg-white">
  <img src={ministero} alt="Ministero" />
  <img src={museo} alt="Museo delle Marionette" />
</div>

<nav class="bg-primary text-white flex items-stretch min-h-[3.25rem]">
  <!-- Brand (fixed, doesn't shrink) -->
  <a href="https://www.operadeipupi.it" class="shrink-0 px-4 py-2 flex items-center">
    <img src={logo} alt="Opera dei Pupi" class="max-h-7" />
  </a>

  <!-- Desktop: flex items that shrink like Bulma navbar-end -->
  <div class="hidden lg:flex items-stretch ml-auto">
    <a href="/" use:link class="nav-link">L'Opera dei Pupi</a>
    <a href="/misuredisalvaguardia" use:link class="nav-link"
      >Misure di salvaguardia</a
    >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="relative flex items-stretch"
      onmouseenter={() => (compagnieOpen = true)}
      onmouseleave={() => (compagnieOpen = false)}
    >
      <a href="/compagnie" use:link class="nav-link">Le Compagnie &#9662;</a>
      {#if compagnieOpen}
        <ul
          class="absolute top-full left-0 z-10 w-52 bg-base-100 text-base-content rounded-box p-2 shadow"
        >
          {#each companies as company (company.slug)}
            <li>
              <a
                href="/compagnie/{company.slug}"
                use:link
                class="block px-3 py-1.5 hover:bg-base-200 rounded"
                onclick={closeDropdown}>{company.menuLabel}</a
              >
            </li>
          {/each}
        </ul>
      {/if}
    </div>
    <a href="/patrimonio" use:link class="nav-link">Patrimonio bibliografico</a>
    <a href="/opere" use:link class="nav-link">Le Opere</a>
    <a href="/contatti" use:link class="nav-link">Contatti e Mappe</a>
  </div>

  <!-- Mobile: hamburger -->
  <div class="ml-auto lg:hidden flex items-center">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <a href="/" use:link onclick={closeDropdown}>L'Opera dei Pupi</a>
        </li>
        <li>
          <a href="/misuredisalvaguardia" use:link onclick={closeDropdown}
            >Misure di salvaguardia</a
          >
        </li>
        <li>
          <a href="/compagnie" use:link onclick={closeDropdown}>Le Compagnie</a>
          <ul class="p-2">
            {#each companies as company (company.slug)}
              <li>
                <a
                  href="/compagnie/{company.slug}"
                  use:link
                  onclick={closeDropdown}>{company.menuLabel}</a
                >
              </li>
            {/each}
          </ul>
        </li>
        <li>
          <a href="/patrimonio" use:link onclick={closeDropdown}
            >Patrimonio bibliografico</a
          >
        </li>
        <li><a href="/opere" use:link onclick={closeDropdown}>Le Opere</a></li>
        <li>
          <a href="/contatti" use:link onclick={closeDropdown}
            >Contatti e Mappe</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero banner — matches Bulma .hero.is-info.is-large.has-background -->
<section class="hero-banner">
  <img src={hero} alt="" class="hero-banner-img" />
  <div class="hero-banner-body"></div>
</section>
