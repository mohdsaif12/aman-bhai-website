import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',

  server: {
    port: 3001,
  },
  css: {
    postcss: '../postcss.config.cjs'
  }
})
