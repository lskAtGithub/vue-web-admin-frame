<template>
  <div class="container">
    <el-icon class="icon-box" @click="onSearchRoutes">
      <Search />
    </el-icon>
    <div class="auto-input-box" :class="{ show: isSearch }">
      <el-autocomplete
        ref="autoInputRef"
        v-model="keyword"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-50"
        placeholder="Please Input Menu Name"
        @blur="isSearch = false"
        @select="handleSelect"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useStore from '@/store'
import type { Ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

interface IRoutes extends Omit<RouteRecordRaw, 'redirect'> {
  redirect?: string
}

const router = useRouter()
const { routeStore } = useStore()

let autoInputRef: Ref<any> = ref(null)
let keyword: Ref<string> = ref('')
let isSearch: Ref<boolean> = ref(false)
let { flattenRouters } = storeToRefs(routeStore)

const querySearch = (keyword: string, cb: Function) => {
  if (!keyword) return
  const routes = flattenRouters.value.filter((item) => {
    // 代理对象转成普通对象
    let rawItem = JSON.parse(JSON.stringify(item))
    const regexp = new RegExp(keyword, 'i')
    if (regexp.test(rawItem.meta.title)) {
      return rawItem
    }
  })
  const noFilterRoute = routes.map((item) => {
    const rawItem = JSON.parse(JSON.stringify(item))
    rawItem.value = rawItem.meta.title
    return rawItem
  })

  const result = noFilterRoute.filter(
    (item) => item.meta && !item.meta.activeMenu && !item.meta.noBreadCrumbs
  )
  cb(result)
}

const handleSelect = (route: IRoutes) => {
  router.push(route.redirect || route.path)
  keyword.value = ''
}

const onSearchRoutes = () => {
  isSearch.value = true
  // wait animation running time
  setTimeout(() => {
    autoInputRef.value.focus()
  }, 500)
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

:deep(.el-input__wrapper) {
  box-shadow: none !important;
}

.container {
  margin-right: 12px;

  .auto-input-box {
    display: block;
    overflow: hidden;
    width: 0px;
    transition: width 0.5s;
    border-bottom: 1px solid #ccc;

    &.show {
      width: 200px;
      margin-left: 12px;
    }
  }

  .icon-box {
    cursor: pointer;

    &:hover {
      color: $--theme-color;
    }
  }
}
</style>
