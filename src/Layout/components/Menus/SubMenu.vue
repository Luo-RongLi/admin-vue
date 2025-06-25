<script setup lang="ts">
import type { SubMenuProps } from 'element-plus'

const props = defineProps<SubMenuProps>()
</script>

<template>
  <el-sub-menu v-bind="props">
    <slot />
  </el-sub-menu>
</template>

<style scoped></style>
