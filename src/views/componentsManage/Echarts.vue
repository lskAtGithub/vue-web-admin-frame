<template>
  <Container class="container">
    <el-button type="primary" @click="onGotoEcharts" text>
      <h1>点击打开echarts官方文档</h1>
    </el-button>
    <p class="desc">
      说明: 基于 echarts 二次封装, 使用方法与echarts没有差别,
      组件只是处理了resize以及监听data数据变化时的视图更新
    </p>
    <div class="layout-box">
      <section>
        <el-button @click="onChangeData">修改数据图表数据</el-button>
        <base-echarts class="echarts" :options="option1" width="650px" height="750px" />
      </section>
      <section>
        <base-echarts class="echarts" :options="option2" width="650px" height="750px" />
      </section>
    </div>
  </Container>
</template>

<script setup lang="ts" name="EchartsDemo">
import { reactive } from 'vue'
import BaseEcharts from '@/components/BaseEcharts.vue'
import Container from '@/components/Container.vue'

let option1 = reactive({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union' },
        { value: 300, name: 'Video' }
      ]
    }
  ]
})

let base = +new Date(1988, 9, 3)
let oneDay = 24 * 3600 * 1000
let data = [[base, Math.random() * 300]]
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay))
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])])
}
let option2 = reactive({
  tooltip: {
    trigger: 'axis',
    position: function (pt: any) {
      return [pt[0], '10%']
    }
  },
  title: {
    left: 'center',
    text: 'Large Ara Chart'
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'time',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {},
      data: data
    }
  ]
})

const onChangeData = () => {
  Object.assign(option1, {
    series: {
      data: [
        { value: 350, name: 'Engine' },
        { value: 340, name: 'Direct' },
        { value: 986, name: 'Email' },
        { value: 750, name: 'Union' },
        { value: 460, name: 'Video' }
      ]
    }
  })
}
const onGotoEcharts = () => {
  window.open('https://echarts.apache.org/handbook/zh/get-started/', '_target')
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  padding: 40px 0;

  .echarts {
    width: 650px;
    margin: 10px auto;
  }

  .desc {
    font-size: 13px;
    color: #999;
  }
}
</style>
