import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "cuantos-tacos",
    compatibilityDate: "2026-10-20",
    observability: {
      enabled: true
    }
  }
});
