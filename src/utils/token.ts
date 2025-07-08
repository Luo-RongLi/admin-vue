import router from '@/router'


export function setToken(token: string) {
  localStorage.setItem('token', token)
}
export function getToken() {
  return localStorage.getItem('token')
}
export function clearToken() {
  localStorage.removeItem('token')
}
export function logout() {
  clearToken()
  router.replace({name: 'login'})
}
