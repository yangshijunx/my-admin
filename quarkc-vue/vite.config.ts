import { fileURLToPath, URL } from 'node:url'

import { defineConfig, ConfigEnv, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { wrapperEnv } from './src/utils/getEnv'

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  console.log(viteEnv)
  return {
    publicDir: viteEnv.VITE_PUBLIC_PATH,
    base: viteEnv.VITE_BASE,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``
        }
      }
    },
    server: {
      host: '0.0.0.0',
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: {
        '/api': {
          target: 'http://192.168.189.1:3000/api/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          // 参考链接 https://github.com/vitejs/vite/issues/9119
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            // substr 是被淘汰語法，因此要改 slice
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
          }
        }
      }
    }
  }
})
