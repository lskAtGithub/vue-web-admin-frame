<template>
  <container>
    <h2>hi, {{ data.name }}</h2>
    <p>页面通过 query 来传id, 每次打开都是同一个tagview</p>
  </container>
</template>

<script setup lang="ts" name="TableManageDetail">
import { useRoute } from 'vue-router'
import Container from '@/components/Container.vue'
import { useTableData } from '../hooks/index'

const route = useRoute()

const data = useTableData[Number(route.query.id) - 1]
</script>

<style scoped lang="scss"></style>
