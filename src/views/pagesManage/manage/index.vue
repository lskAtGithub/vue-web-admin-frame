<script lang="ts" setup name="TableManage">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import useStore from '@/store'

const { tagview } = useStore()
const { cacheList } = storeToRefs(tagview)

onMounted(() => {
  tagview.addCacheList('TableManage')
  
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
