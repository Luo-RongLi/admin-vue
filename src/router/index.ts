import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/Layout/MainLayout.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/views/Login/LoginView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  if (!isAuthenticated() && to.name !== 'login') {
    return { name: 'login' }
  }
  return true
})

export default router
