<script setup lang="ts">
import { useRouter } from 'vue-router'
import VerifyUtils from '@/utils/VerifyUtils';

const router = useRouter();
const props = defineProps(['to'])

function handleTo() {
  if (VerifyUtils.validURL(props.to)) {
    window.open(props.to, "_blank")
    return
  }
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
