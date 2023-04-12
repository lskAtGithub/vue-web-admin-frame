<script lang="ts" setup>
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.app-main {
  width: 100%;
  height: calc(100vh - 51px - 40px);
  overflow: auto;
  background: #f9f9f9;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
    height: 9px;
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
