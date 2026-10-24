<script lang="ts">
  import { string } from "astro:schema";
  import Button from "./button.svelte";

  interface Card {
    title: string;
    description: string;
    image: ImageBitmap;
    goURL: string;
    buttonName: string;
    contentObjectLabels: string;
    contentObject: object;
    labelComplain: string;
    labelMoreLike: string;
    displayerInteger: number;
    counter: number;
  }

  //   const image = image
  //   const contentObject
  let labelComplain = "Complain?";
  let labelMoreLike = "More like this?";
  let displayerInteger = $state(0);
  let counter = $state(0);

  let label1s = 1;
  let label10s = 10;
  let labelReset = 0;

  export function createCard(
    title: string,
    description: string,
    goURL: string,
    buttonName: string,
  ): Card {
    return { title, description, goURL, buttonName };
  }
  const cardDetails = createCard(
    "title",
    "duh",
    "https://facebook.com",
    "Visit",
  );
</script>

<div class="card">
  <div class="card-body">
    <img src="" alt="" />
    <div class="card-body-text">
      <p>{cardDetails.title}</p>
      <p>{cardDetails.description}</p>
      <div class="card-body-counter">
        <div class="card-body-counter-left-panel">
          <div>
            <button
              aria-label="visit this product"
              onclick={() => {
                window.location.href = cardDetails.goURL;
              }}
              {cardDetails.buttonName}
            ></button>
          </div>
        </div>
        <div class="card-body-counter-panel"></div>
        <div class="card-body-counter-right-panel"></div>
      </div>
      <div class="card-body-text-showcaser">
        <aside>
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </aside>
        <aside>
          <div>d</div>
          <div>e</div>
          <div>f</div>
        </aside>
      </div>
    </div>
    <div class="card-body-button-">
      <button onclick={() => {}}>buttonName</button>
    </div>
    <div class="card-body-feet">
      <div><p>nothing</p></div>
      <div><p>other-thing</p></div>
    </div>
  </div>
</div>
