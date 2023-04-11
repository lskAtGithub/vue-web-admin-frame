<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/Container.vue'

onMounted(() => {
  console.log("执行了")
})

</script>

<template>
  <container>
    <div>

    </div>
    <div>end</div>
  </container>
</template>
