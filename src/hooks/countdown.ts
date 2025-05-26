import { onMounted, ref, computed } from 'vue'

export function countdown(key: string) {
  const countdownDisabled = ref(false);
  const count = ref(getCount()||0)
  const now = ref(getNow())
  let interval: ReturnType<typeof setInterval> | null = null
  function getNow(num:number=0){
    return Math.floor(Date.now() / 1000) + num
  }
  function getCount() {
    return +JSON.parse(localStorage.getItem(key) as string)
  }

  function setCount(count: number) {
    localStorage.setItem(key, `${count}`)
  }

  function handlSetInterval() {
    now.value = getNow()
    count.value = getCount()
  }

  function startCountdown() {
    count.value = getNow(60) // 目标时间是60秒后的时间戳
    setCount(count.value)
    handlSetInterval()
    startInterval()
  }

  const remainingTime = computed(() => {
    const diff = count.value - now.value
    const time = diff > 0 ? diff : 0
    if (time === 0) {
      stopInterval()
    }
    return time // 如果倒计时小于0，返回0
  })

  function startInterval() {
    if (!interval) {
      interval = setInterval(handlSetInterval, 1000)
    }
  }

  function stopInterval() {
    if (interval){
      clearInterval(interval)
      interval=null
    }
  }
  function setCountdownDisabled(){
    countdownDisabled.value = !countdownDisabled.value
  }

  onMounted(() => {
    if (count.value - getNow() > 0) {
      startInterval()
    }
  })
  return {
    count,
    startCountdown,
    remainingTime,
    getCount,
    countdown,
    countdownDisabled,
    setCountdownDisabled
  }
}