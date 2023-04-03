<script setup lang="ts">
import appMain from './components/AppMain/index.vue';
import AppNavbar from './components/AppNavbar/index.vue';
import AppSidebar from './components/AppSidebar/index.vue'
import { systemStore } from '@/store/modules/systemStore'

const systemInstance = systemStore()

</script>

<template>
  <div class="main-box">
    <div class="side-box" :class="{ 'is-collapse': systemInstance.isCollapse }">
      <app-sidebar />
    </div>
    <div class="app-content">
      <app-navbar></app-navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.main-box {
  display: flex;
  height: calc(100vh - 51px);

  .side-box {
    width: $--menu-width;
    flex-shrink: 0;

    &.is-collapse {
      width: 64px;
    }
  }

  .app-content {
    flex: 1;
  }
}
</style>
