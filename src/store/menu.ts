import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface MenuItem {
  name: string
  path: string
  icon?: string
  children?: MenuItem[]
}

export interface RouteItem {
  name: string
  path: string
  component: string
  meta?: Record<string, any>
  children?: RouteItem[]
}

export const useMenuStore = defineStore('menu', () => {
  /**
   * @description 菜单项
   */
  const menus = ref<MenuItem[]>([])
  /**
   * @description 路由项 这个接受的是一个扁平的路由数组
   * 例如：[{ name: 'Home', path: '/home', component: 'Home.vue' }, ...]
   */
  const routes = ref<RouteItem[]>([])
  /**
   * @description 当前激活的菜单
   */
  const activeMenu = ref<string>('')

  function setMenus(newMenus: MenuItem[]) {
    menus.value = newMenus
  }

  function setRoutes(newRoutes: RouteItem[]) {
    routes.value = newRoutes
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
