// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
  
//   ],
// })

// export default router

// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/category/:categoryId',
    name: 'category',
    component: () => import('@/views/CategoryView.vue'),
    props: true
  },

  {
    path: '/product/:productId',
    name: 'product',
    component: () => import('@/views/ProductView.vue'),
    props: true
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue')
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckoutView.vue')
  },

  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchResultsView.vue')
  },

  // 404 – Always last
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
] as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router