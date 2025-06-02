<script setup lang="ts">
import LeftView from '@/views/Login/components/LeftView.vue'
import RightView from '@/views/Login/components/RightView.vue'
</script>

<template>
  <main class="flex items-center justify-between gap-4 pr-12 h-screen bg-image">
    <LeftView />
    <RightView />
  </main>
</template>

<style scoped>
.bg-image{
  background: url("public/images/Login/bgLogin.jpg") no-repeat;
  background-size: cover;
}
</style>
