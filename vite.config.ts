import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

const _resolve = (dir: string): string => path.resolve(__dirname, dir)

export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': _resolve('src')
    }
  }
})
