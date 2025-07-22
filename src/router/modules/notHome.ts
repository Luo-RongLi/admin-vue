import { RoutesSort } from "../sort";

export default {
  path: '/not-home',
  name: 'notHome',
  meta:{
    title: '非首页',
    icon: 'not-home',
    sort: RoutesSort.notHome, // 使用 RoutesSort 枚举
  },
  children:[
    {
      path: 'not-home',
      name: 'NotHome',
      component: () => import('@/views/NotHome/NotHome.vue'),
      meta: {
        title: '非首页',
        icon: 'not-home',
        sort: RoutesSort.notHome, // 使用 RoutesSort 枚举
      },
    }
  ]
} satisfies RouteChildrenConfigsTable
