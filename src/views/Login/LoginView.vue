<script setup lang="ts">
import { useSkip } from '@/hooks'

const { router } = useSkip()

function login() {
  localStorage.setItem('token', '登录')
  router.replace({ name: 'home' })
}
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <div class="space-y-4">
      <div>登录页面</div>
      <el-button @click="login">一键登录</el-button>
    </div>
  </main>
</template>

<style scoped></style>
