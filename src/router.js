import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import product from './views/product.vue'
import productPrinter from './views/product_printer.vue'
import productPrinterUX from './views/product_printer_ux.vue'
import productPrinterG from './views/product_printer_g.vue'
import productDetecter from './views/product_detecter.vue'
import productLaser from './views/product_laser.vue'
import productAC from './views/product_ac.vue'
import info from './views/info.vue'

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
      path: '/product/printer',
      name: 'productPrinterPage',
      component: productPrinter
    },
    {
      path: '/product/printer/ux/:id',
      name: 'productPrinterUXPage',
      component: productPrinterUX
    },
    {
      path: '/product/printer/g/',
      name: 'productDPrinterGPage',
      component: productPrinterG
    },
    {
      path: '/product/detecter',
      name: 'productDetecterPage',
      component: productDetecter
    },
    {
      path: '/product/laser',
      name: 'productLaserPage',
      component: productLaser
    },
    {
      path: '/product/ac',
      name: 'productACPage',
      component: productAC
    },
    {
      path: '/info',
      name: 'infoPage',
      component: info
    }
  ]
})
