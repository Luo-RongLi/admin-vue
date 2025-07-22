import { RoutesSort } from '../sort'

const homeRoutes: RouteChildrenConfigsTable = {
  path: '/',
  name: 'index',
  component: () => import('@/layout/MainLayout.vue'),
  meta: {
    title: '首页',
    icon: 'home',
    sort: RoutesSort.home, // 使用 RoutesSort 枚举
  },
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/Home/HomeView.vue'),
      meta: {
        title: '首页',
        icon: 'home',
        sort: RoutesSort.home, // 使用 RoutesSort 枚举
      },
    },
  ],
}

export default homeRoutes
