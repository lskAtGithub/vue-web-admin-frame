<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark({
  storageKey: 'vue-admin-frame-vueuse-theme-key',
  valueDark: 'dark',
  valueLight: 'light'
})

provide('isDark', isDark)
</script>
