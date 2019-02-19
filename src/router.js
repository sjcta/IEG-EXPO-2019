import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import product from './views/product.vue'
import productDetail from './views/product_detail.vue'

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
      path: '/product/detail/:id',
      name: 'productDetailPage',
      component: productDetail
    }
  ]
})
