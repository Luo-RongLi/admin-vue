import { routesConcat, router } from '@/router'
import { flattenRoutesToTwoLevels } from '@/router/utils'
import { defineStore } from 'pinia'
import { ref ,type Ref} from 'vue'
import type {RouteRecordRaw} from 'vue-router'


export const useMenuStore = defineStore('menu', (): {
  menus: Ref<RouteChildrenConfigsTable[]>,
  routes: Ref<RouteChildrenConfigsTable[]>,
  activeMenu: Ref<string>,
  setMenus: (newMenus: RouteChildrenConfigsTable[]) => void,
  setRoutes: (newRoutes: RouteChildrenConfigsTable[]) => void,
  setActiveMenu: (name: string) => void
} => {
  /**
   * @description 菜单项
   */
  const menus = ref<RouteChildrenConfigsTable[]>([])
  /**
   * @description 路由项 这个接受的是一个扁平的路由数组
   * 例如：[{ name: 'Home', path: '/home', component: 'Home.vue' }, ...]
   */
  const routes = ref<RouteChildrenConfigsTable[]>([])
  /**
   * @description 当前激活的菜单
   */
  const activeMenu = ref<string>('')

  function setMenus(newMenus: RouteChildrenConfigsTable[]) {

    menus.value = newMenus
  }

  function setRoutes(newRoutes: RouteChildrenConfigsTable[]) {
    const newRouteLevels = flattenRoutesToTwoLevels([...routesConcat,...newRoutes])
    console.log('newRouteLevels', newRouteLevels);

    router.addRoute(newRouteLevels[0] as RouteRecordRaw)
    routes.value = newRouteLevels
  }

  function setActiveMenu(name: string) {
    activeMenu.value = name
  }

  return {
    menus,
    routes,
    activeMenu,
    setMenus,
    setRoutes,
    setActiveMenu,
  }
},{
  persist:true
})
