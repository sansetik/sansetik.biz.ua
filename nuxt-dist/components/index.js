export { default as MainDefaultAppFooter } from '../..\\components\\main\\default\\AppFooter.vue'
export { default as MainDefaultAppHeaderMenu } from '../..\\components\\main\\default\\AppHeaderMenu.vue'
export { default as MainPagesIndexAppPagesIndexPromo } from '../..\\components\\main\\pages\\index\\AppPagesIndexPromo.vue'

export const LazyMainDefaultAppFooter = import('../..\\components\\main\\default\\AppFooter.vue' /* webpackChunkName: "components/main-default-app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyMainDefaultAppHeaderMenu = import('../..\\components\\main\\default\\AppHeaderMenu.vue' /* webpackChunkName: "components/main-default-app-header-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMainPagesIndexAppPagesIndexPromo = import('../..\\components\\main\\pages\\index\\AppPagesIndexPromo.vue' /* webpackChunkName: "components/main-pages-index-app-pages-index-promo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
