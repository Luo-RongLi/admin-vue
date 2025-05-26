// import { type Ref, ref } from 'vue'
// import type { TableInstance } from 'element-plus'
// import { isEmpty } from 'lodash'
// import type { columnProps, TableProps } from '@/components/BxTable/type'
// import type { SelectUser } from '@/utils/api/types/employeeManage'
// import { usePageData } from '@/hooks/usePageData'
//
// type useTableType<T = any> = {
//   table: TableProps<T>
//   columnData: columnProps<T>[]
//   pageData?: page
// }
// type ReturnTableType<T = any> = {
//   /**
//    * @desc 表格数据 ElTable属性的封装
//    * @type {Ref<TableProps<T>>}
//    */
//   tableData: Ref<TableProps<T>>
//   /**
//    * @desc 分页数据
//    * 默认一页20条
//    */
//   page: Ref<page, page>
//   /**
//    * @desc 表格列数据 ElTableColumn属性的封装
//    * @type {Ref<columnProps<T>[]>}
//    */
//   column: Ref<columnProps<T>[]>
//   /**
//    * @desc 多选表格
//    */
//   multipleTableRef: Ref<{ $el: TableInstance } | undefined>
//   /**
//    * @desc 批量操作
//    */
//   batch: Ref<'del' | ''>
//   /**
//    * @desc 加载中
//    */
//   loading: Ref<boolean>
//   /**
//    * @desc 多选表格数据
//    */
//   multipleSelection: Ref<T[]>
//   /**
//    * @desc 切换批量操作
//    */
//   toggleBatch: () => void
//   handleSelectionChange: (val: T[]) => void
// }
//
// export function useTable<T = any>({
//   table,
//   columnData,
//   pageData = {
//     total: 0,
//     page: 1,
//     limit: 20
//   }
// }: useTableType<T>): ReturnTableType<T> {
//   const { page } = usePageData(pageData)
//   const multipleTableRef = ref<{ $el: TableInstance }>()
//
//   const tableData = ref<useTableType<T>['table']>({
//     tooltipOptions: {
//       hideAfter:0,
//       enterable:false,
//       effect:'light'
//     },
//     ...table
//   }) as ReturnTableType<T>['tableData']
//   const column = ref(columnData)
//   const batch = ref<'del' | ''>('')
//   /**
//    * table 实例
//    */
//   const multipleSelection = ref<T[]>([]) as ReturnTableType<T>['multipleSelection']
//   const loading = ref(false)
//
//   /**
//    * 切换批量操作
//    */
//   function toggleBatch() {
//     if (batch.value === '') {
//       column.value = [{ type: 'selection', width: 55 }, ...columnData]
//     } else {
//       column.value = columnData
//     }
//     multipleTableRef.value?.$el?.clearSelection()
//     multipleSelection.value = []
//     batch.value = batch.value === 'del' ? '' : 'del'
//   }
//
//   const handleSelectionChange = (val: T[]) => {
//     multipleSelection.value = val
//   }
//   return {
//     page,
//     multipleTableRef,
//     column,
//     batch,
//     loading,
//     tableData,
//     multipleSelection,
//     toggleBatch,
//     handleSelectionChange
//   }
// }
