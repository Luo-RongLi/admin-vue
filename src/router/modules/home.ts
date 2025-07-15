const homeRoutes: RouteChildrenConfigsTable = {
  path: '/',
  name: 'index',
  component: () => import('@/layouts/MainLayout.vue'),
  meta: {
    title: '首页',
    icon: 'home',
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'home',
      },
    },
  ],
}

export default homeRoutes
