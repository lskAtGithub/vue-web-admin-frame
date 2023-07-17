<template>
  <svg-icon v-show="!isFullscreen" class-name="svg-icon" icon-class="fullscreen-exit" @click="onToggleScreen"></svg-icon>
  <svg-icon v-show="isFullscreen" class-name="svg-icon" icon-class="fullscreen" @click="onToggleScreen"></svg-icon>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import screenfull from 'screenfull'

  let isFullscreen = ref(true)

  const onToggleScreen = () => {
    screenfull.toggle()
    isFullscreen.value = screenfull.isFullscreen
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && screenfull.isFullscreen) {
      onToggleScreen()
      isFullscreen.value = screenfull.isFullscreen
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.svg-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  cursor: pointer;

  &:hover {
    color: $--theme-color;
  }
}
</style>
