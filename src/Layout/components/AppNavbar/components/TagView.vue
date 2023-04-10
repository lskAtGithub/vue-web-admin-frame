<script setup lang="ts">
import { computed } from 'vue'
import { tabStore } from '@/store/modules/tabStore'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Refresh } from '@element-plus/icons-vue'
import type { ITagItem } from '@/Types/TagView'

const route = useRoute()
const router = useRouter()
const tabInstance = tabStore()

const tabList = computed(() => tabInstance.tabList)
const tabValue = computed(() => {
  return route.meta.noTagView ? route.meta.activeMenu : route.path
})
const isBack = computed(() => {
  const currentRoute = route.matched[route.matched.length - 1]
  if (currentRoute.meta?.activeMenu && currentRoute.meta?.noTagView) {
    return false
  }
  return true
})

const removeTab = (targetName: string) => {
  tabInstance.removeTabControl(targetName)
  const endRoute = tabInstance.tabList[tabInstance.tabList.length - 1] as ITagItem
  router.push({
    path: endRoute.path
  })
}

const handleClickItem = (targetName: string) => {
  router.push({
    path: targetName
  })
}

const handleGoBack = () => {
  router.go(-1)
}

const handleRefresh = () => {
  route.meta.noTagview = true;
  router.replace({
    path: '/redirect' + route.fullPath
  })
  route.meta.noTagview = false;
}
</script>

<template>
  <div class="tab-control">
    <el-button :icon="ArrowLeft" :disabled="isBack" circle size="small" @click="handleGoBack" />
    <el-button :icon="Refresh" circle size="small" @click="handleRefresh" />
    <div class="tab-box">
      <el-tabs v-model="tabValue" type="card" class="demo-tabs" @tab-change="handleClickItem" @tab-remove="removeTab">
        <el-tab-pane v-for="item in tabList" :closable="!item.defalut" :key="item.path" :label="item.title"
          :name="item.path">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.tab-control {
  display: flex;
  align-items: center;
  padding: 0 15px;

  .tab-box {
    margin-left: 20px;
  }
}

:deep(.el-tabs__header) {
  margin-bottom: 0;
}
</style>
