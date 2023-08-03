<template>
  <div class="app-main" :style="dynamicTheme">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup name="AppMain">
import { computed } from 'vue'
import useStore from '@/store'
import { storeToRefs } from 'pinia'

const { tagview, system } = useStore()
const { cacheList } = storeToRefs(tagview)

const dynamicTheme = computed(() => ({
  backgroundColor: system.isDark ? '#383838' : '#f9f9f9'
}))
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.app-main {
  width: 100%;
  height: calc(100vh - 51px - 40px);
  overflow: auto;
  box-sizing: border-box;
  @include scrollbar;
}
</style>
