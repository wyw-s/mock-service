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
  }
})
