<script>
  import logo from "../assets/jojologo.svg";
  import PhoneMenuItem from "./PhoneMenuItem.svelte";

  // Components like PhoneMenuItem, SideItemCard, and StoryCard need to be created as Svelte components
</script>



<div class="flex flex-col flex-1 gap-2">
  "SHI"
  <div class="bg-zinc-900 rounded-lg overflow-hidden">
    <ul>
      <PhoneMenuItem href="/shop" iconName="carbon:store" title="Shop" />
      <PhoneMenuItem href="/story" iconName="mdi:heart-outline" title="Story" />
      <PhoneMenuItem href="/menu" iconName="carbon:book" title="Menu" />
      <PhoneMenuItem
        href="/lab"
        floor={3}
        iconName="tabler:flask-2"
        title="Lab"
      />
      <PhoneMenuItem
        href="/dojo"
        floor={3}
        iconName="tabler:karate"
        title="Dojo"
      />
      <PhoneMenuItem
        href="/cafe"
        floor={2}
        iconName="tabler:coffee"
        title="Cafe"
      />
      <PhoneMenuItem href="/#" floor={1} iconName="tabler:home" title="Home" />
    </ul>
  </div>
  <div class="bg-zinc-900 rounded-lg flex-1">
    <ul>
      <PhoneMenuItem href="#" title="Blogs" iconName="ic:round-chat" />
    </ul>
  </div>
</div> 