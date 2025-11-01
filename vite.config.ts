import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base for GitHub Pages
  base: '/',
  plugins: [react()],
})


