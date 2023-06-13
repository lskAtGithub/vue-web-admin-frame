<template>
  <svg :class="svgClass" aria-hidden="true" fill="currentColor">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  const props = defineProps({
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  })
  const svgClass = computed(() => {
    if (props.className) {
      return 'svg-icon ' + props.className
    } else {
      return 'svg-icon'
    }
  })
  const iconName = computed(() => {
    return `#icon-${props.iconClass}`
  })

</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
