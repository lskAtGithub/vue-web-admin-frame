<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routerStore } from '@/store/modules/routerStore';
import AppLink from './components/AppLink.vue';

const routeStore = routerStore()
const route = useRoute()
const routes: any = computed(() => routeStore.routes.filter(item => !item.hidden))

const currentOpenMenu = (): string => {
  return route.fullPath
}

</script>

<template>
  <el-menu :default-active="currentOpenMenu()" class="el-menu-vertical">
    <div v-for="item in routes" :key="item.redirect">
      <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
        <template #title>
          <app-link :to="item.children[0].path"> {{ item.children[0].title }} </app-link>
        </template>
      </el-menu-item>

      <el-sub-menu v-else :index="item.path || item.redirect">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
          <app-link :to="childItem.path"> {{ childItem.title }} </app-link>
        </el-menu-item>
      </el-sub-menu>
    </div>


  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
