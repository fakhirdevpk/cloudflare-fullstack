<script lang="ts">
  interface Input {
    action: string;
    type: string;
    inputName: string;
    buttonName: string;
  }

  export function createInput(
    action: string,
    inputName: string,
    type = "text",
    buttonName: string,
  ): Input {
    return { action, type, inputName, buttonName };
  }
  const nameInput = createInput("GET", "text", "pizza", "Submit");
</script>

<form action={nameInput.action}>
  <label>
    {nameInput.inputName}
    <input type={nameInput.type} />
  </label>
  <label>
    <button>{nameInput.buttonName}</button>
  </label>
</form>
