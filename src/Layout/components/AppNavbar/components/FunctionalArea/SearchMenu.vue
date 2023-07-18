<template>
  <div class="container">
    <el-icon @click="onSearchRoutes">
      <Search />
    </el-icon>
    <div class="auto-input-box" :class="{ 'show': isSearch }">
      <el-autocomplete ref="autoInputRef" v-model="keyword" :fetch-suggestions="querySearch" clearable
        class="inline-input w-50" placeholder="Please Input Menu Name" @blur="isSearch = false" @select="handleSelect" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import useStore from '@/store'
  import type { Ref } from 'vue'
  import type { RouteRecordRaw } from 'vue-router'

  const router = useRouter()
  const { routeStore } = useStore()

  let autoInputRef: Ref<any> = ref(null)
  let keyword: Ref<string> = ref('')
  let isSearch: Ref<boolean> = ref(false)
  let flattenRouters = ref([]) as Ref<RouteRecordRaw[]>

  function flattenRoutes(routes: RouteRecordRaw[], parentName: unknown = '') {
    let flattenedRoutes: RouteRecordRaw[] = []
    routes.forEach(route => {
      if ((route.meta && route.meta.hidden) || (route.meta && !route.meta.title)) return
      // clone object 避免修改原始对象
      const flatRoute = JSON.parse(JSON.stringify(route))
      // 获取新的名称，父级 + '->' + 自身名称
      flatRoute.meta.title = parentName ? `${parentName} -> ${flatRoute.meta?.title}` : flatRoute.meta.title
      if (flatRoute.children) {
        // 递归扁平化子路由，传递新的父级名称
        const childRoutes = flattenRoutes(flatRoute.children, flatRoute!.meta!.title)
        // 移除原始路由中的子路由
        delete flatRoute.children
        // 将子路由添加到扁平化的路由数组中
        flattenedRoutes = flattenedRoutes.concat(childRoutes)
      }
      // 将当前路由添加到扁平化的路由数组中
      flattenedRoutes.push(flatRoute)
    })
    return flattenedRoutes
  }

  const querySearch = (keyword: string, cb: Function) => {
    const routes = flattenRouters.value.filter(item => {
      // 代理对象转成普通对象
      let rawItem = JSON.parse(JSON.stringify(item))
      const regexp = new RegExp(keyword, 'i')
      if (regexp.test(rawItem.meta.title)) {
        return rawItem
      }
    })
    const result = routes.map(item => {
      const rawItem = JSON.parse(JSON.stringify(item))
      rawItem.value = rawItem.meta.title
      return rawItem
    })
    cb(result)
  }


  const handleSelect = (route: RouteRecordRaw) => {
    router.push(route.meta!.redirect || route.path)
    keyword.value = ''
  }

  const onSearchRoutes = () => {
    isSearch.value = true
    setTimeout(() => {
      autoInputRef.value.focus()
    }, 500)
  }

  onMounted(() => {
    flattenRouters.value = flattenRoutes(routeStore.routes)
  })
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

::v-deep {
  .el-input__wrapper {
    box-shadow: none !important;
  }
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
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }

}
</style>
