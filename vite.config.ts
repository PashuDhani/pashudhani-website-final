import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use absolute base for custom domain so nested routes load assets
  base: '/',
  plugins: [react()],
})


