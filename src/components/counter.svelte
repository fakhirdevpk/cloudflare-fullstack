<script lang="ts">
  interface setCounterInterface {
    initValue: number;
    byAmount: number;
    maxValue: number;
  }

  interface setCounterUI {
    labelButton: string;
    counterFunction: calculateCounter;
  }

  type calculateCounter = (
    initValue: number,
    byAmount: number,
    maxValue: number,
  ) => number;

  function count(
    initValue: number,
    byAmount: number,
    maxValue: number,
  ): setCounterInterface {
    return { initValue, byAmount, maxValue };
  }

  function counterButtonProps(
    labelButton: string,
    counterFunction: calculateCounter,
  ): setCounterUI {
    return { labelButton, counterFunction };
  }

  const props = counterButtonProps("+1", (value, byAmount, maxValue) =>
    Math.min(value + byAmount, maxValue),
  );
</script>