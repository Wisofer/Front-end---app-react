import { defineConfig } from 'vite';
import proxy from '@vitejs/plugin-proxy';

export default defineConfig({
  plugins: [
    proxy({
      '/socket.io': {
        target: 'https://servidor-lake.vercel.app',
        changeOrigin: true,
        ws: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/socket\.io/, ''),
      },
    }),
  ],
});