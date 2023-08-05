<template>
  <container>
    <h2>hi, {{ data.name }}</h2>
    <el-input type="text" v-model="value" />
  </container>
</template>
<script setup lang="ts" name="TableManageEdit">
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Container from '@/components/Container.vue'
import { useTableData } from '../hooks/index'

import type { ListItem } from '../hooks/type'

const route = useRoute()
let value = ref('')
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
onMounted(() => console.log(1234))
</script>

<style scoped lang="scss"></style>
