import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
// https://vitejs.dev/config/server-options.html
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
	host: 'localhost',
	port: 3000,
  }
});
