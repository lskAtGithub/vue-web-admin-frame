<script setup lang="ts">
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang='scss'>
.container {
  margin: 20px;
  background: #fff;
  height: calc(100% - 40px);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #eee;
}
</style>
