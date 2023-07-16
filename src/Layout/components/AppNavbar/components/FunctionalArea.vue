<template>
  <div class="container">
    <el-icon class="icon-box">
      <Search />
    </el-icon>
    <svg-icon class-name="svg-icon" icon-class="fullscreen"></svg-icon>
    <svg-icon class-name="svg-icon" icon-class="fullscreen-exit"></svg-icon>

    <el-popover placement="bottom" :width="200" trigger="hover">
      <template #reference>
        <el-badge :is-dot="true">
          <el-icon class="icon-box">
            <Message />
          </el-icon>
        </el-badge>
      </template>
      <div class="message-box">
        this is message
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup name="FunctionalArea">
  import { ref, reactive } from 'vue'

</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container {
  font-size: 20px;
  display: flex;
  align-items: center;

  .icon-box {
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }

  .svg-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }
}
</style>
