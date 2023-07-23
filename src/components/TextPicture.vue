<!-- 
  * 可设置背景图片的文字
 -->

<script setup lang="ts">
const props = defineProps({
  backgroundImg: {
    type: String,
    default: ''
  },
  fontSize: {
    type: String,
    default: '14px'
  }
})
</script>

<template>
  <div class="text-picture">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.text-picture {
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-image: v-bind('"url(" + props.backgroundImg + ")"');
  font-size: v-bind('props.fontSize');
}
</style>
