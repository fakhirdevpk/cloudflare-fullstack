<script lang="ts">
  import * as z from "zod";
  import type { Props } from "../ts/types/form";

  let {
    textName = "Name",
    textEmail = "Email",
    textCompany = "Company",
    textPassword = "Password",
    textConfirm = "Confirm password",
    textMessage = "Message",
    textButton = "Send",
  }: Props = $props();

  const formSchema = z
    .object({
      name: z.string().min(1),
      email: z.email(),
      companyName: z.string().min(1),
      password: z.string().min(8),
      confirm: z.string(),
      message: z.string().min(1),
    })
    .refine((d) => d.password === d.confirm, {
      message: "Passwords don't match",
      path: ["confirm"],
    });

  let name = $state("");
  let email = $state("");
  let companyName = $state("");
  let password = $state("");
  let confirm = $state("");
  let message = $state("");

  // Validation
  const result = $derived(
    formSchema.safeParse({
      name,
      email,
      companyName,
      password,
      confirm,
      message,
    }),
  );

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!result.success) return;
    console.log(result.data); 
  }
</script>

<section class="page-auth">
  <form action="POST" onsubmit={handleSubmit}>
    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textName}
        <input type="text" placeholder="john" bind:value={name} />
        {#if name.length > 256}
          <div class="page-auth-error-display">
            <p>Name should be no more than 256 letters.</p>
          </div>
        {/if}
      </label>
    </div>

    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textEmail}
        <input placeholder="john@gmail.com" type="email" bind:value={email} />
        {#if email && !z.email().safeParse(email).success}
          <div class="page-auth-error-display">
            {#if !email.includes("@")}
              <p>Email must contain @</p>
            {/if}

            {#if email.includes("@") && !email.split("@")[1].includes(".")}
              <p>Please add a domain, e.g. .com</p>
            {/if}

            {#if email.includes("@") && email.split("@")[1].includes(".")}
              <p>Invalid email</p>
            {/if}
          </div>
        {/if}
      </label>
    </div>

    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textCompany}
        <input placeholder="winston@hr" type="text" bind:value={companyName} />
        {#if companyName && companyName.length < 2}
          <div class="page-auth-error-display">
            <p>Please write a proper company name.</p>
          </div>
        {/if}
      </label>
    </div>

    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textPassword}
        <input
          placeholder="************"
          type="password"
          bind:value={password}
        />
        {#if password && password.length < 8}
          <div class="page-auth-error-display">
            <p>Password must be at least 8 characters.</p>
          </div>
        {/if}
      </label>
    </div>

    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textConfirm}
        <input
          placeholder="************"
          type="password"
          bind:value={confirm}
        />
        {#if confirm && confirm !== password}
          <div class="page-auth-error-display">
            <p>Passwords don't match.</p>
          </div>
        {/if}
      </label>
    </div>

    <!-- Page ~ Module -->
    <div class="page-auth-module">
      <label>
        {textMessage}
        <textarea bind:value={message}></textarea>
        {#if message && message.length < 10}
          <div class="page-auth-error-display">
            <p>Message must be at least 10 characters.</p>
          </div>
        {/if}
      </label>
    </div>
    <!-- Page ~ Form -->
    <button class="page-auth-form-send" disabled={!result.success}
      >{textButton}</button
    >
  </form>
</section>
