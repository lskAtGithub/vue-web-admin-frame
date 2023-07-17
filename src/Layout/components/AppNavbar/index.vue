<template>
  <header class="topbar-box">
    <toggle-switch></toggle-switch>
    <div class="bread-crumb-box">
      <bread-crumb></bread-crumb>
    </div>
    <functional-area></functional-area>
    <avatar></avatar>
  </header>
  <tag-view></tag-view>
</template>

<script lang="ts" setup name="AppNavbar">
  import ToggleSwitch from './components/ToggleSwitch.vue'
  import BreadCrumb from './components/BreadCrumb.vue'
  import avatar from './components/Avatar.vue'
  import TagView from './components/TagView.vue'
  import FunctionalArea from './components/FunctionalArea/index.vue'

</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.topbar-box {
  background-color: #fff;
  height: 51px;
  border-bottom: 1px solid $--border-color;
  margin-bottom: 1px;
  display: flex;
  align-items: center;

  .bread-crumb-box {
    flex: 1;
  }
}
</style>
