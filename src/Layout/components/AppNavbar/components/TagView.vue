<template>
  <div class="tab-control">
    <div class="tab-box">
      <router-link
        class="tag-item suspension"
        :class="{ active: isActive(tag) }"
        v-for="tag in tagViewList"
        :key="tag.path"
        :to="getToPath(tag)"
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
import { Close } from '@element-plus/icons-vue'
import ToolUtils from '@/utils/ToolUtils'

import type { ITagItem } from '@/Types/TagView'

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
    if (route.meta.keepAlive && route.name) {
      tagview.addCacheList(route.name as string)
    }
  },
  { immediate: true }
)

const tagViewList = computed<ITagItem[]>(() => tagview.tagViewList)

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

const getToPath = (tag: ITagItem) => {
  console.log(11)
  const ITag = JSON.parse(JSON.stringify(tag))
  const result = { path: ITag.path }
  if (ToolUtils.isEmptyObject(ITag.query)) Object.assign(result, { query: ITag.query })
  if (ToolUtils.isEmptyObject(ITag.params)) Object.assign(result, { params: ITag.params })
  return result
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
  height: 46px;

  .tab-box {
    white-space: nowrap;
    overflow-x: auto;

    @include scrollbar;

    .tag-item {
      display: inline-block;
      padding: 6px 15px;
      font-size: $--font-size;
      margin: 3px 6px;
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
        box-shadow: inset 0 0 3px 0px #ddd;
        color: $--theme-color;
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
