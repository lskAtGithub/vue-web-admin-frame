<template>
  <el-timeline>
    <el-timeline-item v-for="item in state.timeLineList" :timestamp="getCurrentDay()" placement="top">
      <el-card>
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  function getCurrentDay() {
    const year = new Date().getFullYear()
    const mouth = new Date().getMonth() + 1
    const day = new Date().getDate()
    return `${year} - ${mouth} - ${day}`
  }

  const state = reactive({
    timeLineList: [
      { title: '立项', content: '为新项目立项，准备接下来的开发工作' },
      { title: '项目框架选型', content: '找了很多Vue3 + TS 的框架，最后发现vue-web-admin-frame还不错，准备研究一下，当作本次项目的基础框架去做二次开发' },
      { title: '框架上手', content: '基本上明白vue-web-admin-frame是怎么使用了' },
      { title: '框架改动', content: '基于目前项目的业务，修改了框架，用于二次开发' },
      { title: '开会', content: '普及业务' }
    ]
  })
</script>

<style scoped lang='scss'></style>
