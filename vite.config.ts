import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      // 因为uni.scss可以全局使用，这里根据自己的需求调整
      scss: {
        additionalData: '@import "./src/assets/styles/global.scss";'
      }
    }
  },
});
