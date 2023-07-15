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
      { title: '上班', content: '开始今天的工作吧' },
      { title: '开会', content: '需求评审，准备开始新的项目' },
      { title: '研发', content: '工作中...' },
      { title: '下班', content: '劳逸结合，打工人的下班时间' }
    ]
  })
</script>

<style scoped lang='scss'></style>
