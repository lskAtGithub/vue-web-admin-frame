<template>
  <container class="container">
    <p>
      <img class="icon" :src="error" alt="500" />
    </p>
    <p class="desc">抱歉，服务器内部错误，无法完成请求</p>
    <el-button type="primary" @click="onBack"> 返回首页 </el-button>
  </container>
</template>

<script setup lang="ts" name="error500">
import Container from '@/components/Container.vue'
import error from '@/assets/error/403.png'
import { useRoute, useRouter } from 'vue-router'
import type { ITagItem } from '@/Types/TagView'
import useStore from '@/store'

const router = useRouter()
const route = useRoute()
const { tagview } = useStore()

const onBack = () => {
  const tagItem: ITagItem = {
    path: route.path,
    name: 'error500',
    title: ''
  }
  tagview.removeTagView(tagItem)
  router.push('/')
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;

  .desc {
    font-size: 14px;
    color: #333;
  }
  .icon {
    width: 35vw;
  }
}
</style>
