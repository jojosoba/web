<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentSecond = currentTime.getSeconds();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good night";
  }

  let care = "";

  if (currentSecond ) {
    greeting = "Ingredients";
  } else if (currentSecond >= 12 && currentSecond < 18) {
    greeting = "Community";
  } else {
    greeting = "Environments";
  }
 


</script>

<h1 class="text-3xl font-bold"> We Care about {greeting}</h1>
