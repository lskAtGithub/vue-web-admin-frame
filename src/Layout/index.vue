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
    <div class="app-content" :class="{ 'is-collapse': systemInstance.isCollapse }">
      <app-navbar></app-navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.main-box {
  position: relative;
  height: calc(100vh - 51px);

  .side-box {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: $--menu-width;
    flex-shrink: 0;

    &.is-collapse {
      width: $--collapse-width;
      transition: width 0.36s;
    }
  }

  .app-content {
    width: 100%;
    margin-left: $--menu-width;
    transition: margin-left 0.36s;
    &.is-collapse {
      margin-left: $--collapse-width;
    }
  }
}
</style>
