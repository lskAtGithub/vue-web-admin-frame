<template>
  <el-badge :is-dot="errorInfo.isNewError">
    <svg-icon class-name="svg-icon" icon-class="bug" @click="showBug" />
  </el-badge>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import useStore from '@/store/index'

const { errorInfo } = useStore()
let bugListVisible: Ref<boolean> = ref(false)

const showBug = () => {
  bugListVisible.value = true
}
</script>
<style scoped lang="scss">
.svg-icon {
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-bottom: 2px;
  cursor: pointer;
}
</style>
