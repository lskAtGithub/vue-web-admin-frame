<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<style scoped lang='scss'></style>
