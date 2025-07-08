<script setup lang="ts">

import MenuItem from './MenuItem.vue'
import { toRefs } from 'vue'

type PropsType = {
  subItem: RouteChildrenConfigsTable
  active: string
}
const props = defineProps<PropsType>()
const { subItem } = toRefs(props)
</script>

<template>
  <el-sub-menu :index="subItem.name">
    <MenuItem v-for="x in subItem.children" :key="x.name" :menu-item="x"
    ></MenuItem>
  </el-sub-menu>
</template>

<style scoped></style>
