<script lang="ts">
  import type { iButton } from "../ts/types/button";

  let { count: start, title }: iButton = $props();

  let count = $state(start);
</script>

<button onclick={() => count++}>
  {title} clicks: {count}
</button>