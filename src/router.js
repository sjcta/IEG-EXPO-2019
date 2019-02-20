import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import product from './views/product.vue'
import info from './views/info.vue'
import productDetailUX from './views/product_detail_ux.vue'
import productDetailG from './views/product_detail_g.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: index
    },
    {
      path: '/product',
      name: 'productPage',
      component: product
    },
    {
      path: '/info',
      name: 'infoPage',
      component: info
    },
    {
      path: '/product/detail/ux/:id',
      name: 'productDetailUXPage',
      component: productDetailUX
    },
    {
      path: '/product/detail/g/',
      name: 'productDetailGPage',
      component: productDetailG
    }
  ]
})
