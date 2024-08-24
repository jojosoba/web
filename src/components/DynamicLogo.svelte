<script lang="ts">
  import { onMount } from "svelte";
  // import logo from "../assets/jojologo.svg";
  // import lablogo from "../assets/flourlab.svg";
  import { Icon } from "astro-icon"; // Assuming you have a Svelte-compatible version of this.

  let type = "lab"
  const logo = "../assets/jojologo.svg";
  const lablogo = "../assets/flourlab.svg";
  // const slug = window.location.pathname;

  // onMount(() => {
  // console.log(slug)
  //   if (slug.includes("lab")) {
  //     type = "lab";
  //   } else if (slug.includes("cafe")) {
  //     type = "cafe";
  //   } else {
  //     type = "soba";
  //   }
  // });
</script>

    <a
      href="/"
      aria-label="go back to home page"
      class="flex justify-center items-center gap-2"
    >
      <img
        src={type === "lab" ? lablogo : logo}
        width={50}
        height={50}
        alt="JOJO Soba"
        loading="eager"
      />
      {type}
      ass
      <!-- {#if type === "lab"}
        <span class="font-bold grow text-4xl">Flour Lab</span>
      {:else if type === "cafe"}
        <span class="font-bold grow text-4xl">JOJO Cafe</span>
      {:else}
        <span class="font-bold grow text-4xl">JOJO Soba</span>
      {/if} -->
    </a>

