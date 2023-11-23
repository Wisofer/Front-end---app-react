import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io/socket.io.js': {
        target:'https://servidor-lake.vercel.app',
        ws: true
      }
    }
  }
})
