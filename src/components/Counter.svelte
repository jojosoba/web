<script>
  let count = 0;
  console.log(window.location)
  
</script>

<div>
  <p>Count: {count} {window.location.href}</p>
  <button on:click={() => (count += 1)}>Increment</button>
</div>
