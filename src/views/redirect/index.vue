<template>
  <!-- @empty -->
</template>

<script lang="ts" setup>
  import { nextTick, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  onMounted(() => {
    const { params, query } = route
    const { path } = params
    nextTick(() => {
      const routerPath = '/' + path
      router.replace({ path: routerPath, query })
    })
  })
</script>
