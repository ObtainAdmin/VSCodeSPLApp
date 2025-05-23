import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    Components({
      resolvers: [NaiveUiResolver()] // 自动按需导入 Naive UI
    })
  ],
  build: {
    minify: 'terser', // 生产环境压缩
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
}