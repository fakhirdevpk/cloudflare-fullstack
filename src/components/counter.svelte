<script lang="ts">
  // Config
  const MIN = 1;
  const MAX = 20;
  const TENS = 10;

  // State
  let count = $state(MIN);

  // Actions
  function counter(step: number): void {
    count = Math.max(MIN, Math.min(count + step, MAX));
  }

  function max(): void {
    count = MAX;
  }

  function reset(): void {
    count = MIN;
  }
</script>

<div class="counter">
  <div class="counter-display">
    <div class="counter-module">
      <button onclick={reset}>reset</button>
    </div>
    <div class="counter-module">
      <button onclick={() => counter(-TENS)}>-{TENS}</button>
    </div>
    <div class="counter-module">
      <button onclick={() => counter(-1)}>-1</button>
    </div>
    <div class="counter-zone">
      <p>{count}</p>
    </div>
    <div class="counter-module">
      <button onclick={() => counter(1)}>+1</button>
    </div>
    <div class="counter-module">
      <button onclick={() => counter(TENS)}>+{TENS}</button>
    </div>
    <div class="counter-module">
      <button onclick={max}>max</button>
    </div>
  </div>
</div>

<style>
  * {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
