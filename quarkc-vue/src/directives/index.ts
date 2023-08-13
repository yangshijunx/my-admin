import debounce from './debounce'
import type { App } from 'vue'
const directivesList: any = {
  debounce
}
const directives: any = {
  install(app: App) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key])
    })
  }
}
export default directives
