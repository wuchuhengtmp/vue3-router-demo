import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '../layout/Basic/index.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductIndexPage from '../views/Product/index.vue'
import ProductAddPage from '../views/Product/Add.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicLayout,
      children: [
          { path: 'dashboard', component: Dashboard },
          { 
              path: 'products',
              children: [
              { path: 'index', component:  ProductIndexPage},
              { path: 'add', component: ProductAddPage}
          ]}
      ]
    },
  ]
})

export default router
