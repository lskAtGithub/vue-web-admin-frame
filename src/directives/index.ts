import type { App } from 'vue'

const registerDirectives = async (app: App) => {
  const directiveFiles = import.meta.globEager('./modules/*.ts')
  const directives = Object.values(directiveFiles).map((file: any) => file.default || file)
  for (const directive of directives) {
    const directiveName = directive.name
    const instance = directive.instance
    app.directive(directiveName, instance)
  }
}

export default registerDirectives
