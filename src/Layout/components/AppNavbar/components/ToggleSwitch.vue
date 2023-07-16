<template>
  <div class="scale-icon" @click="handleToggleSide">
    <el-icon size="20px" v-show="!isCollapse">
      <Fold />
    </el-icon>
    <el-icon size="20px" v-show="isCollapse">
      <Expand />
    </el-icon>
  </div>
</template> 

<script lang="ts" setup>
  import useStore from '@/store'
  import { storeToRefs } from 'pinia'

  const { system } = useStore()
  const { isCollapse } = storeToRefs(system)

  function handleToggleSide() {
    system.changeCollapse()
  }
</script>

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
