// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
    host: true,
    allowedHosts: true, // 👈 This allows any tunnel domain to pass through securely
  },
});
