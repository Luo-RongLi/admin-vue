<script setup lang="ts">
import { logout } from '@/utils/token.ts'

const commandFun: Record<string, () => void> = {
  personalInformation,
  settings,
  logout,
}

function personalInformation() {
  console.log('personalInformation')
}

function settings() {
  console.log('设置')
}

const handleCommand = (command: string) => {
  commandFun[command]()
}
</script>

<template>
  <el-dropdown placement="bottom-end" popper-class="w-[120px]" @command="handleCommand">
    <el-avatar class="cursor-pointer" :size="32"> 罗</el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="personalInformation">个人资料</el-dropdown-item>
        <el-dropdown-item command="settings">设置</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
