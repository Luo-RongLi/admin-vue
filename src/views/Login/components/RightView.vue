<script setup lang="ts">
import { ref } from 'vue'
import { useRuleFormRef, useSkip } from '@/hooks'

const formData = ref({
  account: '',
  password: '',
})
const {router} = useSkip()
const {ruleFormRef,submitForm,resetForm} = useRuleFormRef({
  submit:()=>{
    router.replace('/')
  },
})

</script>

<template>
  <el-card class="w-1/3">
    <el-form ref="ruleFormRef" @reset.prevent="resetForm(false)" @submit.prevent="submitForm" :model="formData" >
      <el-form-item label="账号">
        <el-input v-model="formData.account" placeholder="请输入用户名或者手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped></style>
