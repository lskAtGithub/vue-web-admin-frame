<script lang="ts" setup>
import { systemStore } from '@/store/modules/systemStore'

const systemInstance = systemStore()

function handleTogleSide() {
  systemInstance.changeCollapse()
}
</script>

<template>
  <div class="scale-icon" @click="handleTogleSide">
    <el-icon size="20px" v-show="!systemInstance.isCollapse">
      <Fold />
    </el-icon>
    <el-icon size="20px" v-show="systemInstance.isCollapse">
      <Expand />
    </el-icon>
  </div>
</template> 

<style scoped lang="scss">
@import '@/styles/variables.scss';

.scale-icon {
  cursor: pointer;
  width: 60px;
  height: 100%;
  font-size: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-right: 10px;

  &:hover {
    background-color: #e6e6e6;
  }
}
</style>
