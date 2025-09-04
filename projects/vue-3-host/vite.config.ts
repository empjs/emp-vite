import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'


const port = 3100
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    target: 'es2015'
  },
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
