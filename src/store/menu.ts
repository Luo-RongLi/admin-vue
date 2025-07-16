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
  const menus = ref<MenuItem[]>([])
  const routes = ref<RouteItem[]>([])
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
    setActiveMenu
  }
},{
  persist:true
})
