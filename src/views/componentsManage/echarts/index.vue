<script setup lang="ts">
  import { reactive } from 'vue'
  import BaseEcharts from '@/components/BaseEcharts.vue'
  import Container from '@/components/Container.vue';

  let option = reactive({
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
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  })

  const onChangeData = () => {
    Object.assign(option, {
      series: {
        data: [
          { value: 350, name: 'Search Engine' },
          { value: 340, name: 'Direct' },
          { value: 986, name: 'Email' },
          { value: 750, name: 'Union Ads' },
          { value: 460, name: 'Video Ads' }
        ]
      }
    })
  }
  const onGotoEcharts = () => {
    window.open('https://echarts.apache.org/handbook/zh/get-started/', '_target')
  }
</script>

<template>
  <Container class="container">
    <el-button type="primary" @click="onGotoEcharts" text>
      <h1>点击打开echarts文档</h1>
    </el-button>
    <p class="desc">说明: 基于 echarts 二次封装, 使用方法与echarts没有差别, 组件只是处理了resize以及监听data数据变化时的视图更新</p>
    <el-button @click="onChangeData">修改数据图表数据</el-button>
    <base-echarts class="echarts" :options="option" width="650px" height="750px" />
  </Container>
</template>

<style scoped lang='scss'>
.container {
  text-align: center;
  padding: 40px 0;

  .echarts {
    width: 650px;
    margin: 10px auto;
  }

  .desc{
    font-size: 13px;
    color: #999;
  }
}
</style>
