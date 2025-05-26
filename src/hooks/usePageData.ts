import { type Ref, ref } from 'vue'
export const usePageData = (pageData:page={
  total: 0,
  page: 1,
  limit: 20
}):{  page: Ref<page>} => {
  return {page:ref<page>(pageData)}
}