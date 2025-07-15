<script setup lang="ts">
import { ref } from 'vue'
import { useRuleFormRef, useSkip } from '@/hooks'
import { setToken } from '@/utils/token.ts'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
type formDataType = {
  account: string
  password: string
}
const formData = ref<formDataType>({
  account: 'admin',
  password: 'admin',
})
const { router } = useSkip()
const { ruleFormRef, submitForm, resetForm, rules } = useRuleFormRef<formDataType>({
  submit: () => {
    setToken('登录')
    router.replace('/')
  },
  exRules: {
    account: { type: 'string', message: t('login.error.account'), trigger: ['blur', 'change'] },
    password: { type: 'string', message: t('login.error.password'), trigger: ['blur', 'change'] },
  },
})
</script>

<template>
  <el-card class="w-[480px]" body-class="space-y-4">
    <div class="text-center space-y-4">
      <h1 class="text-2xl">{{ t('login.login') }}</h1>
      <el-text>{{ t('title.subtitle') }}</el-text>
    </div>
    <el-form
      ref="ruleFormRef"
      label-position="top"
      :rules="rules"
      @reset.prevent="resetForm(false)"
      @submit.prevent="submitForm"
      :model="formData"
    >
      <el-form-item :label="t('login.account')" prop="account">
        <el-input v-model="formData.account" :placeholder="t('login.placeholder.account')"></el-input>
      </el-form-item>
      <el-form-item :label="t('login.password')" prop="password">
        <el-input v-model="formData.password" type="password" :placeholder="t('login.placeholder.password')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="mx-auto w-full" native-type="submit" type="primary">{{
          t('login.login')
        }}</el-button>
      </el-form-item>
    </el-form>
    <div class="text-center">
      <el-link :underline="false">{{ t("login.register") }}</el-link>
    </div>
  </el-card>
</template>

<style scoped></style>
