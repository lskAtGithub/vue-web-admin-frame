<script setup lang="ts" name="TableManageAdd">
  import { ref } from 'vue'
  import Container from '@/components/Container.vue';

  const val = ref('')
</script>

<template>
  <container>
    <el-input v-model="val" />
  </container>
</template>

<style scoped lang='scss'></style>
