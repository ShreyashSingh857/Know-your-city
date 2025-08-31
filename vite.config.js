// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    allowedHosts: ['*']   // <-- allow all hosts (quick fix for ngrok)
    // OR safer: allowedHosts: ['53aaf6197bd9.ngrok-free.app']
  }
});