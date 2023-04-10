<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/Container.vue'

onMounted(() => {
  console.log(window.history.length)

})

</script>

<template>
  <container>
    <div>

    </div>
    <div>end</div>
  </container>
</template>
