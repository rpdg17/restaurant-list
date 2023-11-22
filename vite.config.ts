import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://nextjs-orpin-omega-98.vercel.app'
    }
  },
  plugins: [react()],
})
