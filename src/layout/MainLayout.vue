<script setup lang="ts">
import AsideMenu from '@/layout/components/Menus/AsideMenu.vue'
import MainHeader from '@/layout/components/MainHeader.vue'
import MainFooter from '@/layout/components/MainFooter.vue'
</script>

<template>
  <el-container class="h-screen">
    <el-aside width="200px">
      <div>后台管理</div>
      <AsideMenu />
    </el-aside>
    <el-container>
      <el-header class="shadow-sm">
        <MainHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="bg-gray-200/70 flex items-center justify-center ">
        <MainFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
</style>
