import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const port = 3100
export default defineConfig({
  plugins: [vue()],
  server: {
    port,
    host: true,
    strictPort: true
  },
  preview: {
    port,
    host: true,
    strictPort: true
  },
})
