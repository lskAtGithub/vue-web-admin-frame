<template>
  <container class="container">
    <h1>自定义指令介绍</h1>
    <el-divider border-style="dashed" />
    <section>
      <h3>permission 控件权限指令</h3>
      <p class="desc">
        控件权限指令通过pinia中的permissions(权限数组)控制,请求获得权限值,通过权限值去判断是否有权限
      </p>
      <div v-loading="loading">
        <p>
          <el-radio-group v-model="currentRole" size="large" @change="onChangeRole">
            <el-radio-button label="admin" />
            <el-radio-button label="editor" />
          </el-radio-group>
        </p>
        <p v-if="key">
          <el-button v-permission="['admin']">admin</el-button>
          <el-button v-permission="['editor']">editor</el-button>
          <el-button v-permission="['admin', 'editor']">admin & editor</el-button>
        </p>
      </div>
    </section>
    <el-divider border-style="dashed" />
    <section>
      <h3>lazyImg 图片懒加载指令</h3>
      <p class="lazy-img-box" v-for="(item, index) in imgs" :key="index">
        <img
          v-lazy-img="{
            url: item,
            once: !!(index === 2),
            callback: (arg: IntersectionObserverEntry) => loadCallback(arg, index)
          }"
          class="img-item"
          alt="image demo"
        />
      </p>
    </section>
    <el-divider border-style="dashed" />
  </container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/components/Container.vue'
import Cookies from 'js-cookie'
import useStore from '@/store'
import { ElMessage } from 'element-plus'

import type { Ref } from 'vue'

const imgs = [
  'https://ts1.cn.mm.bing.net/th/id/R-C.b49dbddffaa692d75988e0c5882dacca?rik=r6IIYs2muimY7A&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529145A4.jpg&ehk=Co9XURYRCjJXUTzFG0Mw6lD7olzDKceEgv3slEC8kvQ%3d&risl=&pid=ImgRaw&r=0',
  'https://ts1.cn.mm.bing.net/th/id/R-C.31df3a5a2d8462228734f95d459883e2?rik=7EE6TeWDk%2f%2bctQ&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214331.jpg&ehk=SpI7mz%2byLqOkT8BL79jcd3iCtQYNFlBHQzbtF1p0vuQ%3d&risl=&pid=ImgRaw&r=0',
  'https://bpic.588ku.com/back_origin_min_pic/19/10/22/33206136ae3d00a059c4aca3d6805357.jpg'
]
const { permission } = useStore()
let currentRole: Ref<string> = ref('admin')
let loading: Ref<boolean> = ref(false)
let key: Ref<boolean> = ref(true)

const onChangeRole = async (e: string) => {
  loading.value = true
  Cookies.set('token', e)
  await permission.getPermissions()
  reload()
}

const reload = () => {
  key.value = false
  setTimeout(() => {
    loading.value = false
    key.value = true
  }, 1000)
}

const loadCallback = (arg: IntersectionObserverEntry, index: number) => {
  ElMessage.success(
    `第${index + 1}张图片出现在可视窗， 已加载, 
    ${index !== 2 ? '每次出现在窗口都会执行一次该回调' : '该回调仅执行一次'}`
  )
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;

  .desc {
    font-size: 13px;
    color: #666;
  }

  .lazy-img-box {
    padding-top: 200px;
    .img-item {
      width: 100%;
    }
  }
}
</style>
