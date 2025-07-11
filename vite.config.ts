import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(
        // 使用webstorm编辑代码时，需要配置该参数，否则无法定位代码位置
        env.VITE_APP_EDIT
          ? {
              launchEditor: 'webstorm',
            }
          : undefined,
      ),
      tailwindcss(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: 'type/auto-imports.d.ts',
      }),
      Components({
        // allow to autoload markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'css',
          }),
        ],
        dts: 'type/components.d.ts',
      }),

      createHtmlPlugin({
        inject: {
          data: {
            __VERSION__: Date.now(), // 或使用 git commit 哈希
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    esbuild: {
      drop: ['console'],
    },
    build: {
      // 保留默认 hash 文件名机制
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
  }
})
