<!-- 
  项目常用的容器，只是实现了一些简单的样式，
  其实使用 scss 的 @mixin 也能达到一样的效果
  但是基于代码可扩展性的考量，还是使用了组件的方式
  后续可以通过  props  来实现扩展
 -->

<template>
  <div class="__common-component-container" :style="dynamicTheme">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { computed } from 'vue'

const { system } = useStore()

const dynamicTheme = computed(() => ({
  backgroundColor: system.isDark ? '#212121' : '#fff'
}))
</script>

<style scoped lang="scss">
.__common-component-container {
  margin: 15px;
  min-height: calc(100% - 30px);
  padding: 30px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #eee;
}
</style>
