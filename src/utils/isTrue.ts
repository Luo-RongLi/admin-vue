import { getToken } from '@/utils/token.ts'

export const isAuthenticated = () => {
  return !!getToken()
}
