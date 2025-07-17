import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults, type ViteUserConfig } from 'vitest/config'
import viteConfigFn from './vite.config'
// 处理 vite.config.ts 回调
const viteConfig = typeof viteConfigFn === 'function'
  ? viteConfigFn({ command: 'serve', mode: 'test' })
  : viteConfigFn

export default mergeConfig(
  viteConfig as ViteUserConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
