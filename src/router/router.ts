// 一维数组，格式与 RouteChildrenConfigsTable 的 value 类型一致
const routesArray: RouteChildrenConfigsTable[] = [
  // 示例
  {
    id: 1,
    parentId: null,
    name: 'home',
    path: '/home',
    component: 'Login/LoginView',
    meta: { title: 'Home', icon: 'home' },
  },
  {
    id: 2,
    parentId: 1,
    name: 'about',
    path: '/about',
    component: 'Login/LoginView',
    meta: { title: 'About Us', icon: 'info' },
  },
]

export default routesArray
