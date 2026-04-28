import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: '../dist/website-2',
  },
  server: {
    port: 3002,
  },
  css: {
    postcss: '../postcss.config.cjs'
  }
})
