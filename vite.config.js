import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about_me.html"),
        appointment: resolve(__dirname, "appointment.html"),
        datenschutz: resolve(__dirname, "datenschutz.html"),
        impressum: resolve(__dirname, "impressum.html"),
        karriere: resolve(__dirname, "karriere.html"),
        confirmation: resolve(__dirname, "confirmation.html"),
        error: resolve(__dirname, "error.html"),

      },
    },
  },
});