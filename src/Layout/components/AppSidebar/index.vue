<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routerStore } from '@/store/modules/routerStore'
import { systemStore } from '@/store/modules/systemStore'
import AppLink from './components/AppLink.vue';

const routeStore = routerStore()
const route = useRoute()
const rouetrIntance = useRouter()
const systemInstans = systemStore()

const routes: any = computed(() => routeStore.routes.filter(item => !item.hidden))

const onlyChildRoute: any = computed(() => routeStore.routes.filter(item => !item.hidden && item.children?.length === 1))
const childRoute: any = computed(() => routeStore.routes.filter(item => !item.hidden && item.children?.length !== 1))

const currentOpenMenu = (): string => {
  return route.fullPath
}

function handleFirstMenuPush(item: IRoute) {
  rouetrIntance.push({
    path: item.path
  })
}

</script>

<script lang="ts">
interface IRoute {
  path: string,
  title: string,
  redirect: string,
  meta: any,
  component: any
}
</script>

<template>
  <el-menu :collapse="systemInstans.isCollapse" :default-active="currentOpenMenu()" class="el-menu-vertical">
  <el-menu-item v-for="item in onlyChildRoute" :index="item.children[0].path" :key="item.children[0].path">
    <el-icon @click="handleFirstMenuPush(item)">
      <component :is="item.meta?.icon" />
    </el-icon>
    <template #title>
      <app-link :to="item.children[0].path"> {{ item.children[0].title }} </app-link>
    </template>
  </el-menu-item>

    <el-sub-menu v-for="item in childRoute" :index="item.path || item.redirect" :key="item.children[0].path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
          <app-link :to="childItem.path"> {{ childItem.title }} </app-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <!-- <div v-for="item in routes" :key="item.redirect">
                <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
                      <el-icon>
                        <component :is="item.meta?.icon" />
                      </el-icon>
                      <template #title>
                        <app-link :to="item.children[0].path"> {{ item.children[0].title }} </app-link>
                      </template>
                    </el-menu-item>

                    <el-sub-menu v-else :index="item.path || item.redirect">
                      <template #title>
                        <el-icon>
                          <component :is="item.meta?.icon" />
                        </el-icon>
                        <span>{{ item.title }}</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
                          <app-link :to="childItem.path"> {{ childItem.title }} </app-link>
                        </el-menu-item>
                      </el-menu-item-group>
                    </el-sub-menu>
                  </div> -->
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
