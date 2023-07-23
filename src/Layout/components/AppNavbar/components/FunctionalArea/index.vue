<template>
  <div class="container">
    <search-menu />
    <fullscreen />
    <message />
  </div>
</template>

<script lang="ts" setup name="FunctionalArea">
import Fullscreen from './Fullscreen.vue'
import Message from './Message.vue'
import SearchMenu from './SearchMenu.vue'
</script>

<style scoped lang="scss">
.container {
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
