<template>
  <div class="tab-control">
    <el-button
      class="suspension"
      :icon="ArrowLeft"
      :disabled="isBack"
      circle
      size="small"
      @click="handleGoBack"
    />
    <el-button class="suspension" :icon="Refresh" circle size="small" @click="handleRefresh" />
    <div class="tab-box">
      <router-link
        class="tag-item suspension"
        :class="{ active: isActive(tag) }"
        v-for="tag in tagViewList"
        :key="tag.path"
        :to="tag.path"
        :params="tag.params"
        :query="tag.query"
      >
        <span class="tag--title">{{ tag.title }}</span>
        <el-icon v-if="!tag.affix" class="close--icon" @click.prevent.stop="removeTab(tag)">
          <Close />
        </el-icon>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/store/index'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Refresh } from '@element-plus/icons-vue'
import type { ITagItem } from '@/Types/TagView'
import { Close } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const { tagview } = useStore()

watch(
  () => router.currentRoute.value,
  (newValue, oldValue) => {
    if (!route.meta.noTagView) {
      tagview.addTagView({
        path: newValue.path,
        title: newValue.meta.title as string,
        query: newValue.query,
        params: newValue.params
      })
    }
    if (route.meta.cache && route.name) {
      tagview.addCacheList(route.name as string)
    }
  },
  { immediate: true }
)

const tagViewList = computed(() => tagview.tagViewList)
const isBack = computed(() => {
  const currentRoute = route.matched[route.matched.length - 1]
  if (currentRoute.meta?.activeMenu && currentRoute.meta?.noTagView) {
    return false
  }
  return true
})

const removeTab = (tag: ITagItem) => {
  tagview.removeTagView(tag)
  if (isActive(tag)) {
    const endRoute = tagview.tagViewList[tagview.tagViewList.length - 1] as ITagItem
    router.push({
      path: endRoute.path
    })
  }
}

const isActive = (tag: ITagItem): boolean => {
  if (route.meta.noTagView && route.meta.activeMenu) {
    return route.meta.activeMenu === tag.path
  }
  return route.path === tag.path
}

const handleGoBack = () => {
  router.go(-1)
}

const handleRefresh = () => {
  router.replace({
    path: '/redirect' + route.fullPath
  })
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.suspension {
  box-shadow: 0 0 5px #ccc;

  &:hover {
    box-shadow: inset 0 0 3px 0px #ddd;
  }
}

.tab-control {
  display: flex;
  align-items: center;
  padding: 2px 15px;
  border-radius: 3px;
  height: 38px;

  .tab-box {
    margin-left: 20px;
    white-space: nowrap;
    overflow-x: auto;

    @include scrollbar;

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

      &:hover {
        .close--icon {
          display: inline-block;
        }
      }

      &.active {
        box-shadow: inset 0 0 10px 0px #ccc;
        color: #888;
      }

      .tag--title {
        vertical-align: middle;
      }

      .close--icon {
        margin-left: 8px;
        vertical-align: middle;
        display: none;
        transition: display 0.3s;

        &:hover {
          color: #fff;
          background: #ccc;
          border-radius: 50%;
        }
      }
    }
  }
}

:deep(.el-tabs__header) {
  margin-bottom: 0;
}
</style>
