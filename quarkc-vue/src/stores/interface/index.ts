export interface GlobalStore {
  token: string
  userInfo: any
}
export interface AuthStore {
  routeName: string
  authButtonList: {
    [key: string]: string[]
  }
  authMenuList: Menu.MenuOptions[]
}
