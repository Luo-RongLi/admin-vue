import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedGeneric,
  type RouteRecordNameGeneric,
} from 'vue-router'
import { isAuthenticated } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/MainLayout.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue'),
    },
  ],
})
const whitelist: RouteRecordNameGeneric[] = ['login', 'register']
router.beforeEach((to: RouteLocationNormalizedGeneric) => {
  if (!isAuthenticated() && !whitelist.includes(to.name)) {
    return { name: 'login' }
  }
  return true
})
router.afterEach(() => {})

export default router
