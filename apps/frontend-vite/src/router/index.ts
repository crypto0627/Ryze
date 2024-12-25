import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Profile from '../components/Profile.vue'
import MerchantCreation from '../components/MerchantCreation.vue'
import MerchantManagement from '../components/MerchantManagement.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/merchant-creation',
    name: 'MerchantCreation',
    component: MerchantCreation,
  },
  {
    path: '/merchant-management',
    name: 'MerchantManagement',
    component: MerchantManagement,
    meta: { requiresMerchant: true },
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAdmin: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guards
router.beforeEach(
  (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const userRole = localStorage.getItem('userRole') // Replace with proper state management in production

    if (to.meta.requiresMerchant && userRole !== 'merchant') {
      next('/main')
    } else if (to.meta.requiresAdmin && userRole !== 'admin') {
      next('/main')
    } else {
      next()
    }
  },
)

export default router
