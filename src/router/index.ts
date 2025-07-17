import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedGeneric,
  type RouteRecordNameGeneric,
  type RouteRecordRaw,
} from 'vue-router'
import remaining from './modules/remaining'
import { isAuthenticated } from '@/utils'
// "./modules/**/*.ts",
const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts', '!./modules/**/remaining.ts'],
  {
    eager: true,
  },
)

/** 原始静态路由（未做任何处理） */
const routes: RouteChildrenConfigsTable[] = []

Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})

export const routesConcat = [...routes, ...remaining] as unknown as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesConcat,
})
const whitelist: RouteRecordNameGeneric[] = ['login', 'register']
router.beforeEach((to: RouteLocationNormalizedGeneric) => {
  if (!isAuthenticated() && !whitelist.includes(to.name)) {
    return { name: 'login' ,query: { redirect: to.fullPath } }
  }
  return true
})
router.afterEach(() => {})

export default router
