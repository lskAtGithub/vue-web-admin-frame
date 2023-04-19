<script setup lang="ts">
</script>

<template>
  <div class="__common-component-container">
    <slot></slot>
  </div>
</template>

<style scoped lang='scss'>
.__common-component-container {
  margin: 15px;
  background: #fff;
  min-height: calc(100% - 30px);
  padding: 30px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #eee;
}
</style>
