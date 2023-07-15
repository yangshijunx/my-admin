export function isDevFn(mode: string): boolean {
  return mode === 'development'
}
export function isProdFn(mode: string): boolean {
  return mode === 'production'
}
export function wrapperEnv(envConifg: Recordable): ImportMetaEnv {
  const res: any = {}
  const envKeys = Object.keys(envConifg)
  for (const envKey of envKeys) {
    let realName = envConifg[envKey].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    if (envKey === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envKey === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {
        throw new Error('VITE_PROXY config wrong')
      }
    }
    res[envKey] = realName
  }
  return res
}
