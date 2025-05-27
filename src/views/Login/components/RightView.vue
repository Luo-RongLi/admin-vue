<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  account: '',
  password: '',
})

</script>

<template>
  <el-card class="w-1/3">
    Right，Here is a form
    <el-form>
      <el-form-item label="账号">
        <el-input placeholder="请输入用户名或者手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped></style>
