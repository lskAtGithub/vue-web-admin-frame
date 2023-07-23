<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const list = computed(() => {
  const { matched } = router.currentRoute.value
  return matched.filter((item) => item.meta.title && !item.meta.noBreadCrumbs)
})
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  display: flex;
  align-items: center;

  :deep(.el-breadcrumb__inner, .el-breadcrumb__item) {
    display: inline-flex;
    align-items: center;
    margin: 1px;
  }

  .menu-icon {
    padding-right: 5px;
  }
}
</style>
