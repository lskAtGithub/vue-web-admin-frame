<script setup lang="ts">
import appMain from './components/AppMain/index.vue';
import AppNavbar from './components/AppNavbar/index.vue';
import AppSidebar from './components/AppSidebar/index.vue'
import { systemStore } from '@/store/modules/systemStore'

const systemInstans = systemStore()

</script>

<template>
  <app-navbar></app-navbar>
  <div class="main-box">
    <div class="side-box" :class="{ 'is-collapse': !systemInstans.isCollapse }">
      <app-sidebar />
    </div>
    <div class="app-content">
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
    transition: all 0.5;
    &.is-collapse{
      width: 100%;
    }
  }

  .app-content {
    flex: 1;
  }
}
</style>
