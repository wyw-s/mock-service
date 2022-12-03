import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: './client',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/mock')
      }
    }
  }
})
