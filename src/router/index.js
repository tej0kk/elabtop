import { createRouter, createWebHashHistory } from 'vue-router'

// Import View/Page
import HomeView from '../views/HomeView.vue'
import LandingPage from '../views/LandingPage.vue'
import KatalogPage from '../views/KatalogPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import KeranjangPage from '../views/KeranjangPage.vue'
import KonfirmasiPage from '../views/KonfirmasiPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import SuksesPage from '../views/SuksesPage.vue'

// Regist View/Page
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/katalogpage',
    name: 'KatalogPage',
    component: KatalogPage
  },
  {
    path: '/productdetailpage/:id',
    name: 'ProductDetailPage',
    component: ProductDetailPage
  },
  {
    path: '/keranjangpage',
    name: 'KeranjangPage',
    component: KeranjangPage
  },
  {
    path: '/konfirmasipage',
    name: 'KonfirmasiPage',
    component: KonfirmasiPage
  },
  {
    path: '/checkoutpage',
    name: 'CheckoutPage',
    component: CheckoutPage
  },
  {
    path: '/suksespage',
    name: 'SuksesPage',
    component: SuksesPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
