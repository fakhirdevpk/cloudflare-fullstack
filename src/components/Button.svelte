<script>
  let count = $state(0);
  let tens = $state(0);
  let hundreds = $state(0);
  let thousands = $state(0);

  let title = $state("burger");
</script>

<button
  onclick={() => {
    count++;
    console.log("clicked");
    tens += 10;
    hundreds += 100;
    thousands += 1000;

    if (tens > 0 && tens < 100) {
      title = "pineapple";
    }
    if (tens > 100) {
      title = "fruit";
    }
  }}
>
  {title} clicks: {count}
</button>
{tens}
{hundreds}
{thousands}

<style>
  button {
    margin: 0;
    padding: 0;
    height: 45px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 4rem;
  }
</style>
