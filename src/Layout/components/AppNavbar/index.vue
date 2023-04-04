<script lang="ts" setup>
import ToggleSwitch from './components/ToggleSwitch.vue';
import BreadCrumb from './components/BreadCrumb.vue';

</script>

<template>
  <header class="topbar-box">
    <toggle-switch></toggle-switch>
    <bread-crumb></bread-crumb>
  </header>
</template> 

<style scoped lang="scss">
@import '@/styles/variables.scss';

.topbar-box {
  background-color: #fff;
  height: 51px;
  border-bottom: 1px solid $--border-color;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
}
</style>
