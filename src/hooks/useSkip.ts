import {
  type RouteLocationAsPathGeneric,
  type RouteLocationAsRelativeGeneric,
  type RouteLocationNormalizedLoaded,
  useRoute,
  useRouter
} from 'vue-router'

export function useSkip<T extends  Record<any, any>>(){
  const router = useRouter();
  const route = useRoute() as RouteLocationNormalizedLoaded & { query?: T };
  const query = route?.query
  async function onSkip(to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric){
    return await router.push(to)
  }
  return {
    router,
    route,
    onSkip,
    query
  }
}
