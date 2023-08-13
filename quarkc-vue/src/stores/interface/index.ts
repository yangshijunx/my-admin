export interface GlobalStore {
  token: string
  userInfo: any
  loading: boolean
  loadingText: string
}
export interface AuthStore {
  routeName: string
  authButtonList: {
    [key: string]: string[]
  }
  authMenuList: Menu.MenuOptions[]
}
