<script lang="ts">
  interface setButtonInterface {
    count: number;
    title: string;
  }
  let count = $state(0);
  let title = $state("Burger");
</script>

<button
  onclick={() => {
    count++;
    console.log("Clicked");
  }}
>
  {title} clicks: {count}
</button>
