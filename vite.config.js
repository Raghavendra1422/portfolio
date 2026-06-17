import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  optimizeDeps: {
    exclude: []
  },
  server: {
    fs: {
      strict: false
    }
  }
})