<script setup lang="ts">
import { getMenu } from '@/api/user'
import { onMounted } from 'vue'

onMounted(() => {
  getMenu().then(res => {
    console.log(res);
  })
})
</script>

<template>
  我是首页
</template>
