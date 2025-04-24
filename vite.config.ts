// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio/", // 👈 Set this to your repo name
  plugins: [react()],
})
