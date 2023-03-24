<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import routeData from '@/data'
import AppLink from './components/AppLink.vue';

const data = reactive(routeData)
const route = useRoute()

const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}

const currentOpenMenu = (): string => {
  return route.fullPath
}

</script>

<template>
  <el-menu :default-active="currentOpenMenu()" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
    <el-sub-menu v-for="item in data" :key="item.redirect" :index="item.redirect">
      <template #title>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
        <app-link :to="childItem.path"> {{ item.title }} </app-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
