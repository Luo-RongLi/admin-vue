// 一维数组，格式与 RouteChildrenConfigsTable 的 value 类型一致
const routesArray: RouteConfigsTableId[] = [
  // 示例
  {
    id: "2",
    parentId: "1",
    name: 'about',
    path: '/about',
    component: 'Login/LoginView',
    meta: { title: 'About Us', icon: 'info' },
  },
]

export default routesArray
