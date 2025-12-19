
import { createRouter, createWebHistory } from 'vue-router'
// Views
import HomeView from '@/views/HomeView.vue'
import Categories from '@/views/Categories.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/categories/:categoryId',
    name: 'categories',
    component: Categories,
  },

  {
    path: '/ProductDetails/:productId',
    name: 'ProductDetails',
    component: ProductDetails,
  }

  // {
  //   path: '/category/:categoryId',
  //   name: 'category',
  //   component: () => import('@/views/CategoryView.vue'),
  //   props: true,
  // },
//   {
//     path: '/product/:productId',
//     name: 'product',
//     component: () => import('@/views/ProductView.vue'),
//     props: true,
//   },
//   {
//     path: '/cart',
//     name: 'cart',
//     component: () => import('@/views/CartView.vue'),
//   },
//   {
//     path: '/checkout',
//     name: 'checkout',
//     component: () => import('@/views/CheckoutView.vue'),
//   },
//   {
//     path: '/search',
//     name: 'search',
//     component: () => import('@/views/SearchResultsView.vue'),
//   },
//   // 404 – always LAST
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'not-found',
//     component: () => import('@/views/NotFoundView.vue'),
//   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
