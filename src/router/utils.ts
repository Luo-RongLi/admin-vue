import { deepClone } from '@/utils/clone'
interface Route {
  path: string
  name?: string
  children?: Route[]
  [key: string]: any
}

export function flattenRoutesToTwoLevels(routes: Route[]): Route[] {
  if (!Array.isArray(routes) || routes.length === 0) {
    return []
  }

  const root: Route = deepClone(routes.find((route) => route.path === '/')!)

  // 递归收集所有子路由（不管多少级），都放到 root.children 里
  function collectAllChildren(routeList: Route[]) {
    for (const route of routeList) {
      if (route.path === '/') {
        if (route.children) {
          collectAllChildren(route.children)
        }
      } else {
        root.children!.push({ ...route, children: undefined })
        if (route.children?.length) {
          collectAllChildren(route.children)
        }
      }
    }
  }

  collectAllChildren(routes)

  return [root] // 返回一个包含根路由的数组
}
