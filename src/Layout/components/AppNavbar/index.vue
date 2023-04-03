<script lang="ts" setup>
import { systemStore } from '@/store/modules/systemStore'

const systemInstance = systemStore();

function handleTogleSide() {
  systemInstance.changeCollapse()
}
</script>

<template>
  <div class="header-topbar-box">

    <div class="info-box">
      <div class="scale-icon" @click="handleTogleSide">
        <el-icon v-show="!systemInstance.isCollapse">
          <Fold size="18px" />
        </el-icon>
        <el-icon v-show="systemInstance.isCollapse">
          <Expand size="18px" />
        </el-icon>
      </div>
    </div>
  </div>
</template> 

<style scoped lang="scss">
@import '@/styles/variables.scss';

.header-topbar-box {
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 1px #000;
  margin-bottom: 1px;
  display: flex;
  align-items: center;

  .left-side {
    text-align: center;
    width: $--menu-width;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;

    .el-menu-vertical{
      width: 100%;
    }

    .admin-icon {
      fill: $--theme-color;
      width: 64px;
      height: 30px;
      flex-shrink: 0;
    }
    &.collapse {
      width: 64px;
    }
  }

  .info-box {
    flex: 1;
    padding: 0 18px;

    .scale-icon {
      cursor: pointer;
      width: 32px;
    }
  }
}
</style>
