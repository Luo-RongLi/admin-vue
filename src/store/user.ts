
import { defineStore } from 'pinia'
import { ref } from 'vue'
interface UserType {
  id: string | null
  token: string | null,
  name: string
  email: string
  auths: string[]
}
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<UserType>({
      id: null,
      name: '',
      email: '',
      token: null,
      auths: [],
    })

    function setUser(newUser: UserType) {
      user.value = { ...newUser }
    }

    function clearUser() {
      user.value = {
        id: null,
        name: '',
        email: '',
        token: null,
        auths: [],
      }
    }

    return { user, setUser, clearUser }
  },
  {
    persist: true
  },
)
