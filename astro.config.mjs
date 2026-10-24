// @ts-check
import { defineConfig, fontProviders } from "astro/config";


import svelte from "@astrojs/svelte";


// https://astro.build/config
export default defineConfig({
  fonts : [{
    provider: fontProviders.fontsource(),
    name: "poppins",
    cssVariable: "--font-poppins",
  }],
  server: {
    port: 4321,
    host: true,
    allowedHosts: true, // 👈 This allows any tunnel domain to pass through securely
  },

  integrations: [svelte()],
});