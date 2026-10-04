import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub user site (username.github.io) serves from root
export default defineConfig({
  plugins: [react()],
  base: '/',
})
