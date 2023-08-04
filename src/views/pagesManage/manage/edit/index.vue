<template>
  <container>
    <h2>hi, {{ data.name }}</h2>
    <p>页面通过 query 来传id, 每次打开都是一个新的tagview</p>
  </container>
</template>
<script setup lang="ts" name="TableManageEdit">
import { useRoute } from 'vue-router'
import Container from '@/components/Container.vue'
import { useTableData } from '../hooks/index'

const route = useRoute()

const data = useTableData[Number(route.params.id) - 1]
</script>

<style scoped lang="scss"></style>
