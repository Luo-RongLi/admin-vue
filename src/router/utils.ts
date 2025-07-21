import { deepClone } from '@/utils/clone'
import type { RouteComponent } from 'vue-router'


const modules: Record<string, any> = import.meta.glob(
  ['/src/views/**/*.{vue,tsx}', '!/src/views/**/components/**/*.vue', '!/src/views/{Login,Registered}/**']
)
//这一步是取出来view里面的文件找到对应文件的懒加载函数，并执行。
export const loadView = (view: string | RouteComponent) => {
  if (modules['/src/views/' + view + '.tsx']) {
    return modules['/src/views/' + view + '.tsx']
  }
  return modules['/src/views/' + view + '.vue']
}

export function flattenRoutesToTwoLevels(
  routes: RouteChildrenConfigsTable[],
): RouteChildrenConfigsTable[] {
  if (!Array.isArray(routes) || routes.length === 0) {
    return []
  }

  const root: RouteChildrenConfigsTable = deepClone(routes.find((route) => route.path === '/')!)
  // 递归收集所有子路由（不管多少级），都放到 root.children 里
  function collectAllChildren(routeList: RouteChildrenConfigsTable[]) {
    for (const route of routeList) {
      if (route.path === '/') {
        if (route.children?.length) {
          collectAllChildren(route.children)
        }
      } else {
        if (route.children?.length) {
          collectAllChildren(route.children)
        } else {
          if (typeof route.component === 'string') {
            root.children!.push({
              ...route,
              component: loadView(route.component),
            })
          } else {
            root.children!.push({ ...route })
          }
        }
      }
    }
  }

  collectAllChildren(routes)

  return [root] // 返回一个包含根路由的数组
}
// 遍历后台传来的路由字符串，转换为组件对象
export function filterAsyncRouter(asyncRouterMap: RouteChildrenConfigsTable[]): RouteChildrenConfigsTable[] {
  return asyncRouterMap.map(route => {
    return {
      ...route,
      component: loadView(route.component!)
    }
  })
}

export function flattenRoutes(routes: any[]) {
  let flatRoutes: any[] = []
  routes.forEach(route => {

    if (route.children && route.children.length > 0) {

      flatRoutes = flatRoutes.concat(flattenRoutes(route.children))
    }

    flatRoutes.push(route)

  })

  return flatRoutes
}

// 构建嵌套菜单列表的函数
export function buildMenuList(menuList: RouteConfigsTableId[]): RouteChildrenConfigsTable[] {
  // 1. 将扁平化数组转为Map，便于查找父级
  const menuMap: Map<string, RouteChildrenConfigsTable> = new Map();

  menuList.forEach(menu => {
    const meta: CustomizeRouteMeta = JSON.parse(menu.meta as unknown as string); // 解析meta字段
    menuMap.set(menu.id, {
      ...menu,
      component: menu.component!=='0'?menu.component : undefined, // 若有component则保留
      meta:{
        showLink:true,
        ...meta
      },
      children: []
    });
  });
  console.log(menuList)
  // 2. 生成嵌套的结构
  const nestedMenu: RouteChildrenConfigsTable[] = [];

  menuList.forEach(menu => {
    const currentMenu = menuMap.get(menu.id);
    if (menu.parentId) {
      const parentMenu = menuMap.get(menu.parentId);
      if (parentMenu && currentMenu) {
        parentMenu.children?.push(currentMenu); // 将当前菜单添加到其父级的children中
      }
    } else if (currentMenu) {
      nestedMenu.push(currentMenu); // 没有parentId的是顶级菜单
    }
  });
  console.log(nestedMenu)
  // 3. 添加redirect字段，如果存在子路由，设置redirect为第一个子路由的path
  // nestedMenu.forEach(menu => addRedirect(menu));

  return nestedMenu;
}


// 添加 redirect 字段的辅助函数
export function addRedirect(menu: RouteChildrenConfigsTable): void {
  if (menu.children && menu.children.length > 0) {
    menu.redirect = menu.children[0].path;
    menu.children.forEach(child => addRedirect(child)); // 递归处理子菜单
  }
}
