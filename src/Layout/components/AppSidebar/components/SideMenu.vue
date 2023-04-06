<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routerStore } from '@/store/modules/routerStore'
import { systemStore } from '@/store/modules/systemStore'
import AppLink from './AppLink.vue';
import Logo from './Logo.vue';
import type { RouteRecordRaw } from 'vue-router'

const routeStore = routerStore()
const route = useRoute()
const rouetrIntance = useRouter()
const systemInstance = systemStore()

const onlyChildRoute: any = computed(() => routeStore.routes.filter(item => !item.hidden && item.children?.length === 1))
const childRoute: any = computed(() => routeStore.routes.filter(item => !item.hidden && item.children?.length !== 1))

const currentOpenMenu = () => {
  if (route.meta?.activeMenu) {
    return route.meta?.activeMenu
  }
  return route.fullPath
}

function handleFirstMenuRoute(item: RouteRecordRaw) {
  rouetrIntance.push({
    path: item.path
  })
}

</script>

<template>
  <el-menu :collapse="systemInstance.isCollapse" background-color="#545c64" text-color="#fff"
    :default-active="currentOpenMenu()" class="el-menu-vertical">
    <logo></logo>
    <el-menu-item v-for="item in onlyChildRoute" :index="item.children[0].path" :key="item.children[0].path">
      <el-icon @click="handleFirstMenuRoute(item)">
        <component :is="item.meta?.icon" />
      </el-icon>
      <template #title>
        <app-link :to="item.children[0].path"> {{ item.children[0].meta.title }} </app-link>
      </template>
    </el-menu-item>

    <el-sub-menu v-for="item in childRoute" :index="item.path || item.redirect" :key="item.children[0].path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
        <app-link :to="childItem.path"> {{ childItem.meta.title }} </app-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
