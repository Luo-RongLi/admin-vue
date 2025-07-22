import { router } from '@/router'
import { useMenuStore } from '@/store/menu'
import { useUserStore } from '@/store/user'
import Cookies from 'js-cookie'

// 默认三天
export function setToken(token: string, EXPIRATION: number = 3) {
  // localStorage.setItem('token', token)
  Cookies.set('token', token, { expires: EXPIRATION })
}

export function getToken() {
  return Cookies.get('token')
}

export function clearToken() {
  Cookies.remove('token')
}

export function logout() {
  clearToken()
  const menuStore = useMenuStore()
  const userStore = useUserStore()
  userStore.clearUser()
  menuStore.clear()
  router.replace({ name: 'login' }).then()
}
