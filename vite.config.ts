import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pack': path.resolve(__dirname, 'packages'),
    },
  },
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
})
