<script lang="ts">
  //   interface CardBody {
  //     image: ImageBitmap;
  //     contentObject: object;
  //   }
  interface CardHeader {
    title: string;
    description: string;
    url: string;
  }
  
  let labelVisit: string = "visit";
  export function createHeader(
    title: string,
    description: string,
    url: string,
  ): CardHeader {
    return { title, description, url };
  }
  let { title, description, url }: CardHeader = $props();
</script>

<div class="card">
  <div class="card-body">
    <img src="" alt="" />
    <div class="card-body-text">
      <p>{title}</p>
      <p>{description}</p>
      <div class="card-body-counter">
        <div class="card-body-counter-left-panel">
          <div>
            <!-- <button aria-label="visit this product" onclick={() => {}}>
              +1
            </button> -->
          </div>
        </div>
        <div class="card-body-counter-panel"></div>
        <div class="card-body-counter-right-panel"></div>
      </div>
      <div class="card-body-text-showcaser">
        <!-- something -->
      </div>
    </div>
    <div class="card-body-button-">
      <button
        onclick={() => {
          window.location.href = url;
        }}
      >
        {labelVisit}
      </button>
    </div>
    <div class="card-body-feet">
      <div><p>nothing</p></div>
      <div><p>other-thing</p></div>
    </div>
  </div>
</div>
