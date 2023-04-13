<script setup lang="ts">
  import { computed, watch } from 'vue'
  import useStore from '@/store/index'
  import { useRoute, useRouter } from 'vue-router'
  import { ArrowLeft, Refresh } from '@element-plus/icons-vue'
  import type { ITagItem } from '@/Types/TagView'

  const route = useRoute()
  const router = useRouter()
  const { tagview } = useStore()

  watch(() => router.currentRoute.value, (newValue, oldValue) => {
    tagview.addTagView({
      path: newValue.path,
      title: newValue.meta.title as string,
      query: newValue.query,
      params: newValue.params
    })
  }, { immediate: true })

  const tagViewList = computed(() => tagview.tagViewList)
  const tabValue = computed({
    get() {
      return route.meta.noTagView ? route.meta.activeMenu : route.path
    },
    set() {
      route.meta.noTagView ? route.meta.activeMenu : route.path
    }
  })
  const isBack = computed(() => {
    const currentRoute = route.matched[route.matched.length - 1]
    if (currentRoute.meta?.activeMenu && currentRoute.meta?.noTagView) {
      return false
    }
    return true
  })

  const removeTab = (targetName: string) => {
    tagview.removeTagView(targetName)
    const endRoute = tagview.tagViewList[tagview.tagViewList.length - 1] as ITagItem
    router.push({
      path: endRoute.path
    })
  }

  const isActive = (tag: ITagItem): boolean => {
    return route.path === tag.path
  }

  const handleGoBack = () => {
    router.go(-1)
  }

  const handleRefresh = () => {
    route.meta.noTagview = true
    router.replace({
      path: '/redirect' + route.fullPath
    })
    route.meta.noTagview = false
  }
</script>

<template>
  <div class="tab-control">
    <el-button class="suspension" :icon="ArrowLeft" :disabled="isBack" circle size="small" @click="handleGoBack" />
    <el-button class="suspension" :icon="Refresh" circle size="small" @click="handleRefresh" />
    <div class="tab-box">
      <router-link class="tag-item suspension" :class="{ 'active': isActive(tag) }" v-for="(tag, index) in tagViewList"
        :key="tag.path" :to="tag.path" :params="tag.params" :query="tag.query">
        <span class="tag--title">{{ tag.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import '@/styles/variables.scss';

.suspension{
  box-shadow: 0 0 3px #ccc;
  &:hover {
    box-shadow: inset 0 0 2px 0px #ccc;
  }

}
.tab-control {
  display: flex;
  align-items: center;
  padding: 1px 15px;

  .tab-box {
    margin-left: 20px;

    .tag-item {
      display: inline-block;
      padding: 6px 15px;
      font-size: $--font-size;
      margin: 3px 4px;
      border-radius: 5px;
      color: #666;

      &:not(.active):hover {
        color: $--theme-color;
      }

      &.active {
        box-shadow: inset 0 0 8px 0px #ddd;
      }
    }
  }
}

:deep(.el-tabs__header) {
  margin-bottom: 0;
}
</style>
