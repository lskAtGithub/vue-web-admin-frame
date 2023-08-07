<template>
  <container>
    <el-input v-model="val" />
  </container>
</template>

<script setup lang="ts" name="TableManageAdd">
import { ref } from 'vue'
import Container from '@/components/Container.vue'

const val = ref('')
</script>

<style scoped lang="scss"></style>
