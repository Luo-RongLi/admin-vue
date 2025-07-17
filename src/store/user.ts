import { defineStore } from 'pinia'
import { ref } from 'vue'
interface UserType {
  id: string | null
  name: string
  email: string
  auth: string
}
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<UserType>({
      id: null,
      name: '',
      email: '',
      auth: '',
    })

    function setUser(newUser: UserType) {
      user.value = { ...newUser }
    }

    function clearUser() {
      user.value = {
        id: null,
        name: '',
        email: '',
        auth: '',
      }
    }

    // 判断角色有没有权限
    function isAuth(auth: string | string[]): boolean {
      if (Array.isArray(auth)) {
        return auth.includes(user.value.auth)
      }
      return user.value.auth === auth
    }

    return { user, setUser, clearUser, isAuth }
  },
  {
    persist: true,
  },
)
