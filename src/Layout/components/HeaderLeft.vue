<script setup lang="ts">
const goBack = () => {
  console.log('go back')
}
</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<style scoped>

</style>
