// 自定义防抖指令
import type { DirectiveBinding, Directive } from 'vue'

const debounce: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw new Error('callback must be a function')
    }
    let timer: number | null = null
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    })
  },
  beforeMount(el: HTMLElement) {
    el.removeEventListener('click', () => {})
  }
}
export default debounce
