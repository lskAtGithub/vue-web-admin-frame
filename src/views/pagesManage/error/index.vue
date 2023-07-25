<template>
  <container class="container">
    <h1>本页面用于调试错误信息</h1>
    <p class="desc">本地环境会开启全局bug捕获（点击头像左边即可看到所有捕获到的bug）</p>
    <el-button type="danger" @click="onSendErrorApi">发送错误请求</el-button>
    <el-button type="danger" @click="onCallNoneVar">访问不存在的变量</el-button>
  </container>
</template>

<script setup lang="ts" name="ErrorPage">
import container from '@/components/Container.vue'
import { ElMessage } from 'element-plus'
import { errorApi } from '@/api/error/index'

const onSendErrorApi = () => {
  errorApi()
}

const onCallNoneVar = () => {
  ElMessage.error('已访问不存在的变量')
  // @ts-ignore
  noneVar = 1
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}

.desc {
  font-size: 12px;
  color: #999;
}
</style>
