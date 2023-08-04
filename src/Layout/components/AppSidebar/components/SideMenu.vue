<template>
  <el-menu :collapse="isCollapse" :default-active="currentOpenMenu()" class="el-menu-vertical">
    <logo></logo>
    <el-menu-item
      v-for="item in onlyChildRoute"
      :index="item.children[0].path"
      :key="item.children[0].path"
    >
      <el-icon @click="handleToPath(item)">
        <component :is="item.meta?.icon" />
      </el-icon>
      <template #title>
        <app-link :to="item.children[0].path"> {{ item.children[0].meta.title }} </app-link>
      </template>
    </el-menu-item>

    <el-sub-menu v-for="item in childRoute" :index="item.redirect || item.path" :key="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <el-menu-item
        v-for="childItem in item.children"
        :index="childItem.redirect || childItem.path"
        :key="childItem.path"
      >
        <app-link :to="childItem.path"> {{ getTitle(childItem) }} </app-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import useStore from '@/store'
import AppLink from './AppLink.vue'
import logo from './Logo.vue'
import type { RouteRecordRaw } from 'vue-router'

const { routeStore, system } = useStore()
const route = useRoute()
const router = useRouter()
const { isCollapse } = storeToRefs(system)

const onlyChildRoute: any = computed(() =>
  routeStore.routes.filter((item) => !item.meta?.hidden && item.children?.length === 1)
)
const childRoute: any = computed(() =>
  routeStore.routes.filter((item) => !item.meta?.hidden && item.children?.length !== 1)
)

const currentOpenMenu = () => {
  if (route.meta?.activeMenu) {
    return route.meta?.activeMenu
  }
  return route.fullPath
}

const handleToPath = (item: RouteRecordRaw) => {
  router.push({
    path: item.path
  })
}

const getTitle = (item: RouteRecordRaw) => {
  if (item.children && item.children.length > 1) {
    let showItem = item.children.filter((i) => !i.meta!.hidden)[0]
    return showItem.meta!.title
  }
  return item.meta!.title
}
</script>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
