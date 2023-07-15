/// <reference types="vite/client" />

// * Vite
declare type Recordable<T = any> = Record<string, T>
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
