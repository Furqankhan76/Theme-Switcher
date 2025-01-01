import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Theme-Switcher", // Replace 'my-react-app' with your actual repo name
});
