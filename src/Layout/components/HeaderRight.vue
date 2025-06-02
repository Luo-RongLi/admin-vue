<script setup lang="ts">
const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>

<template>
  <el-dropdown placement="bottom-end">
    <el-avatar class="cursor-pointer" :size="32">
      罗
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu @command="handleCommand">
        <el-dropdown-item command="personalInformation">个人资料</el-dropdown-item>
        <el-dropdown-item command="settings">设置</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
