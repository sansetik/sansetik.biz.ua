import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  MainDefaultAppFooter: () => import('../..\\components\\main\\default\\AppFooter.vue' /* webpackChunkName: "components/main-default-app-footer" */).then(c => wrapFunctional(c.default || c)),
  MainDefaultAppHeaderMenu: () => import('../..\\components\\main\\default\\AppHeaderMenu.vue' /* webpackChunkName: "components/main-default-app-header-menu" */).then(c => wrapFunctional(c.default || c)),
  MainPagesIndexAppPagesIndexPromo: () => import('../..\\components\\main\\pages\\index\\AppPagesIndexPromo.vue' /* webpackChunkName: "components/main-pages-index-app-pages-index-promo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
