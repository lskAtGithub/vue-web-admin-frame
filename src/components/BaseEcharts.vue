<template>
  <div class="echarts-box">
    <div ref="echartsRef" :style="{ width: props.width, height: props.height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  initChart()
})

onUnmounted(() => {
  echarts.dispose
})

watch(
  () => props.options,
  (newVal, oldVal) => {
    createEcharts()
  },
  { deep: true }
)

const props = defineProps({
  width: {
    type: String,
    default: () => '600px'
  },
  height: {
    type: String,
    default: () => '500px'
  },
  options: {
    type: Object,
    default: () => ({})
  },
  theme: {
    type: String,
    default: () => ''
  }
})
const echartsRef = ref(null)
let chart: any = ref(null)
const initChart = () => {
  chart = echarts.init(echartsRef.value! as HTMLElement, props.theme) as echarts.ECharts
  createEcharts()
  window.onresize = function () {
    chart.resize()
  }
}
const createEcharts = () => {
  chart.setOption(props.options)
}
</script>

<style scoped lang="scss"></style>
