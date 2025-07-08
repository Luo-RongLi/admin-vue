<script setup lang="ts">
import { ref } from 'vue'
import { useRuleFormRef, useSkip } from '@/hooks'
import { setToken } from '@/utils/token.ts'

type formDataType = {
  account: string;
  password: string;
}
const formData = ref<formDataType>({
  account: 'admin',
  password: 'admin',
})
const {router} = useSkip()
const {ruleFormRef,submitForm,resetForm,rules} = useRuleFormRef<formDataType>({
  submit:()=>{
    setToken('登录')
    router.replace('/')
  },
  exRules:{
    account:{type:'string',message:'请输入账号！！!',trigger:['blur','change']},
    password:{type:'string',message:'请输入密码！！!',trigger:['blur','change']},
  }
})

</script>

<template>
  <el-card class="w-[480px]" body-class="space-y-4">
    <div class="text-center space-y-4">
      <h1 class="text-2xl">登录</h1>
      <el-text>输入您的邮箱和密码来登录您的账户</el-text>
    </div>
    <el-form ref="ruleFormRef" label-position="top" :rules="rules" @reset.prevent="resetForm(false)" @submit.prevent="submitForm" :model="formData" >
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account" placeholder="请输入用户名或者手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="mx-auto w-full" native-type="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="text-center">
      <el-link :underline="false">注册账号</el-link>
    </div>
  </el-card>
</template>

<style scoped>

</style>
