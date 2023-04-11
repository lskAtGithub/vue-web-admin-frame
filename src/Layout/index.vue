<script setup lang="ts">
import appMain from './components/AppMain/index.vue'
import AppNavbar from './components/AppNavbar/index.vue'
import AppSidebar from './components/AppSidebar/index.vue'
import { systemStore } from '@/store/modules/system'

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
  width: calc(100vw);
  height: calc(100vh);

  .side-box {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: $--menu-width;
    flex-shrink: 0;

    &.is-collapse {
      width: $--collapse-width;
    }
  }

  .app-content {
    width: calc(100vw - $--menu-width);
    height: 100%;
    overflow: hidden;
    margin-left: $--menu-width;
    transition: all 0.36s;

    &.is-collapse {
      width: calc(100vw - $--collapse-width);
      margin-left: $--collapse-width;
    }
  }
}</style>
