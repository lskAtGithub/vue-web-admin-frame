<template>
  <container>
    <h2>hi, {{ data.name }}</h2>
    <input type="text">
    <p>页面通过 query 来传id, 每次打开都是一个新的tagview</p>
  </container>
</template>
<script setup lang="ts" name="TableManageEdit">
import { onActivated, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Container from '@/components/Container.vue'
import { useTableData } from '../hooks/index'

import type { ListItem } from '../hooks/type'

const route = useRoute()
const data = reactive<ListItem>({
  id: '',
  date: '',
  name: '',
  state: '',
  city: '',
  address: '',
  age: '',
  tag: ''
})

onActivated(() => {
  const listitem = useTableData[Number(route.params.id) - 1]
  Object.assign(data, listitem)
})
</script>

<style scoped lang="scss"></style>
