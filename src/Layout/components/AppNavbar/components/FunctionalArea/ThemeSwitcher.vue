<template>
  <el-icon @click="switchTheme" class="icon-box" v-show="!isDark">
    <Sunny />
  </el-icon>
  <el-icon @click="switchTheme" class="icon-box" v-show="isDark">
    <Moon />
  </el-icon>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import useStore from '@/store'

const isDark = useDark({
  storageKey: 'vue-admin-frame-vueuse-theme-key',
  valueDark: 'dark',
  valueLight: 'light'
})

const toggleDark = useToggle(isDark)

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
