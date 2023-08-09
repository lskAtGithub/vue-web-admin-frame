import type { Directive, DirectiveBinding } from 'vue'

interface HTMLImageElementWithObserver extends HTMLImageElement {
  observer?: IntersectionObserver
}

interface IBinding {
  url: string
  once?: boolean
  callback?: Function | null
}

const instance: Directive = {
  mounted(el: HTMLImageElementWithObserver, binding: DirectiveBinding<IBinding>) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        el.src = binding.value.url
        if (binding.value.once) observer.disconnect()
        if (binding.value.callback) binding.value.callback(entries[0])
      }
    })
    el.observer = observer
    observer.observe(el)
  },
  unmounted(el: HTMLImageElementWithObserver) {
    if (el.observer) el.observer.disconnect()
  }
}

export default { name: 'lazy-img', instance }
