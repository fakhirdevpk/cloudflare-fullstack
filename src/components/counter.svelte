<script lang="ts">
  // Props
  interface Props {
    start?: number;
    step?: number;
    max?: number;
    text?: string;
  }

  let { start = 0, step = 1, max = 10, text = "+1" }: Props = $props();

  // State
  // svelte-ignore state_referenced_locally
  let count = $state(start);
</script>

<button onclick={() => (count = Math.min(count + step, max))}>
  {text}
</button>
<p>{count}</p>