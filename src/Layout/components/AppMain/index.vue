<script lang="ts" setup name="AppMain">
  import { useRoute } from 'vue-router'
  import useStore from '@/store'
  import { storeToRefs } from 'pinia'

  const route = useRoute()
  const { tagview } = useStore()
  const { cacheList } = storeToRefs(tagview)
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.app-main {
  width: 100%;
  height: calc(100vh - 51px - 40px);
  overflow: auto;
  background: #f9f9f9;
  box-sizing: border-box;

  @include scrollbar;
}
</style>
