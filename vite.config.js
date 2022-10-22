import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  })
