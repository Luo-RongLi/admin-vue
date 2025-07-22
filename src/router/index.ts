import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedGeneric,
  type RouteRecordNameGeneric,
  type RouteRecordRaw,
} from 'vue-router'
import remaining from './modules/remaining'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isAuthenticated } from '@/utils'
import { flattenRoutesToTwoLevels } from './utils'
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
console.log('routes', routes);

const routesConcat = flattenRoutesToTwoLevels(routes)
console.log('routesConcat', routesConcat);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routesConcat,...remaining] as RouteRecordRaw[],
})

const whitelist: RouteRecordNameGeneric[] = ['login', 'register']
router.beforeEach((to: RouteLocationNormalizedGeneric) => {
    NProgress.start()
  if (!isAuthenticated() && !whitelist.includes(to.name)) {
    return { name: 'login' ,query: { redirect: to.fullPath } }
  }
  return true
})
router.afterEach(() => {
    NProgress.done()
})

export {
  routesConcat,
  router
}
