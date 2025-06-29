<script setup lang="ts">
import type { MenuItemProps, SubMenuProps } from 'element-plus'
import MenuItem from './MenuItem.vue'
import { toRefs } from 'vue'

type PropsType = {
  subItem: SubMenuProps & {
    children: MenuItemProps
  }
  active: string
}
const props = defineProps<PropsType>()
const { subItem } = toRefs(props)
</script>

<template>
  <el-sub-menu :index="subItem.index">
    <MenuItem v-for="x in subItem.children" :key="x.name" :sub-item="x"
    ></MenuItem>
  </el-sub-menu>
</template>

<style scoped></style>
