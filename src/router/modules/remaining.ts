

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginView.vue'),
  },
] satisfies RouteChildrenConfigsTable[]
