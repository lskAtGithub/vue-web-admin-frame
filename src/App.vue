<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { storeToRefs } from 'pinia'

const { tagview, system } = useStore()
const { cacheList } = storeToRefs(tagview)
</script>
