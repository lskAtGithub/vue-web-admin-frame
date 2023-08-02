<template>
  <el-icon @click="switchTheme" class="icon-box" v-show="!isDark">
    <Sunny />
  </el-icon>
  <el-icon @click="switchTheme" class="icon-box" v-show="isDark">
    <Moon />
  </el-icon>
</template>

<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables'
import useStore from '@/store'

const { system } = useStore()

const switchTheme = () => {
  toggleDark()
  system.toggleDark(isDark.value)
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.icon-box {
  cursor: pointer;
  margin-right: 12px;
  margin-bottom: 2px;

  &:hover {
    color: $--theme-color;
  }
}
</style>
