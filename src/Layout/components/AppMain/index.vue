<script lang="ts" setup></script>


<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.app-main {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
