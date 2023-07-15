/// <reference types="vite/client" />

// * Vite
declare type Recordable<T = any> = Record<string, T>
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_DROP_CONSOLE: boolean
  readonly VITE_OPEN: boolean
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
