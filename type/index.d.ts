declare module 'pinia-plugin-persistedstate' {
  const persistedstate: any
  export default persistedstate
}
declare module 'nprogress' {
  const NProgress: {
    start: () => void
    done: () => void
  }
  export default NProgress
}
interface page {
  total: number
  page: number
  limit: number
}
