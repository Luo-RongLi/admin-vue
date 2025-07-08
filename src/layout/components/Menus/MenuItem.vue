<script setup lang="ts">
defineProps<{
  menuItem:RouteChildrenConfigsTable
}>()
</script>

<template>
<el-menu-item :index="menuItem.name">
  <template #title>
    <el-icon v-if="menuItem.meta?.icon">
      <component :is="menuItem.meta?.icon" />
    </el-icon>
    <span>{{ menuItem.meta?.title }}</span>
  </template>
  <router-link :to="menuItem.path">{{ menuItem.meta?.title }}</router-link>
</el-menu-item>
</template>

<style scoped>

</style>
