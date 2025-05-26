import { onBeforeUnmount, onMounted, type Ref, ref } from 'vue'

interface UseViewHeightProps {
  tableData: Ref<
    Record<string, any>
  >
  value?: string
  otherHeight?: number
}
interface UseViewHeightReturn {
  updateTableHeight: () => void
  height: Ref<number>
}
export function useViewHeight({
  tableData,
  value = 'maxHeight',
  otherHeight = 250
}: UseViewHeightProps):UseViewHeightReturn {
  const height = ref(0)
  const updateTableHeight = () => {
    // 获取窗口高度，减去其他组件的高度，计算表格的最大高度
    const windowHeight = window.innerHeight
    height.value = windowHeight - otherHeight
    tableData.value[value] = height.value
  }

  onMounted(() => {
    updateTableHeight()
    window.addEventListener('resize', updateTableHeight)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateTableHeight)
  })
  return {
    updateTableHeight,
    height
  }
}
