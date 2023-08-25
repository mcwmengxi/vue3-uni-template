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
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {}
  },
  build: {
    /** 配置h5打包js,css,img分别在不同文件夹*/
    assetsDir: 'static/image',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
});
