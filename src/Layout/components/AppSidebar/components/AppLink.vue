<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
const props = defineProps(['to'])

const handleTo = () => {
  router.push({
    path: props.to
  })
}
</script>

<template>
  <div class="app-link" @click="handleTo">
    <slot />
  </div>
</template>

<style scoped lang='scss'>
.app-link {
  width: 100%;
}
</style>
