import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from 'dns';
import basicSsl from '@vitejs/plugin-basic-ssl';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
// https://vitejs.dev/config/server-options.html
export default defineConfig({
  plugins: [
	vue(),
	basicSsl()
],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
	host: 'localhost',
	port: 3000,
	https: true,
	cors: true,
  }
});
