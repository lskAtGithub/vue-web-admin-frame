<script lang="ts" setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </div>
</template>
