<script lang="ts" setup>
import ToggleSwitch from './components/ToggleSwitch.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import Avatar from './components/Avatar.vue';

</script>

<template>
  <header class="topbar-box">
    <toggle-switch></toggle-switch>
    <div class="bread-crumb-box">
      <bread-crumb></bread-crumb>
    </div>
    <avatar></avatar>
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

  .bread-crumb-box{
    flex: 1;
  }
}
</style>
