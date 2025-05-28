import { ref, type MaybeRef, type Ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

type Maybe = MaybeRef<Record<string, never> | string>

type ReturnRuleFormRef<T extends MaybeRef<Record<string, never> | string> = string> = {
  /**
   * 表单规则
   */
  ruleFormRef: Ref<FormInstance | undefined>
  /**
   * 校验通过后触发的函数
   */
  submitForm: (formEl: FormInstance | undefined) => Promise<boolean | void> | undefined
  /**
   * 重置表单，重置表单后，会触发校验，校验通过后触发submit函数
   * @param carryOut 是否触发submit函数
   */
  resetForm: (carryOut?: boolean) => void
  rules: Ref<FormRules<T> | unknown>
  setRules: () => void
}
type ruleFormRefProps<T extends Maybe = string> = {
  /**
   * 自定义规则校验
   */
  exRules?: FormRules<T>
  /**
   * submit函数，校验通过后触发
   * @param formEl
   */
  submit: () => void
  /**
   * 更新规则，返回新的规则对象
   */
  updateRules?: () => FormRules<T> | undefined
  reset?: () => void
}

export function useRuleFormRef<T extends Maybe>({
  exRules,
  submit,
  updateRules,
  reset,
}: ruleFormRefProps<T>): ReturnRuleFormRef<T> {
  const ruleFormRef = ref<FormInstance>()
  const rules = ref<FormRules<T>>(exRules ?? {})
  const submitForm = () => {
    if (!ruleFormRef.value) return
    return ruleFormRef.value
      .validate((valid) => {
        if (valid) {
          submit()
        } else {
          console.log('error submit!')
        }
      })
      .catch((e) => {
        console.log('error submit!', e)
      })
  }
  const resetForm = (carryOut: boolean = true) => {
    if (!ruleFormRef.value) return
    reset?.()
    console.log('重置')
    ruleFormRef.value.resetFields()
    if (carryOut) {
      submit()
    }
  }
  const setRules = () => {
    rules.value = updateRules?.()
  }

  return {
    ruleFormRef,
    submitForm,
    resetForm,
    rules,
    setRules,
  }
}
