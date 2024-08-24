<script>
  // import { Icon } from 'astro-icon';

  export let href = '';
  export let iconName = '';
  export let floor = undefined;
  export let title = '';

  let isActive = false;
  $: isActive = true
</script>

<li>
  <a 
  
    {href}
    class="flex gap-4 py-3.5 px-5 font-semibold transition-all duration-300 drop-shadow-2xl"
    class:bg-fuchsia-800={isActive}
    class:custom-pattern={isActive}
    class:text-white={isActive}
    class:border-x-violet-100={isActive}
    class:transform={isActive}
    class:skew-y-[24]={isActive}
    class:hover:text-red={isActive}
    class:text-zinc-400={!isActive}
    class:hover:text-zinc-100={!isActive}
  >
    <!-- <Icon name={iconName} class="h-6 w-6 drop-shadow-2xl" /> -->
    <p class="drop-shadow-2xl">
      {title}
    </p>
    {#if floor !== undefined}
      <div class="ml-auto -rotate-3 bg-secondary-500 px-2 rounded-md text-white">
        FLR {floor}
      </div>
    {/if}
  </a>
</li>

<style>
</style>
