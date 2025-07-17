import router from '@/router'
import Cookies from 'js-cookie'

// 默认三天
export function setToken(token: string,EXPIRATION: number=3) {
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
  router.replace({ name: 'login' }).then()
}
