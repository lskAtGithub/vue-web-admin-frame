<script setup lang="ts" name="HomePage">
  import { onMounted, ref } from 'vue'
  import Container from '@/components/Container.vue'
  const val = ref('')
  onMounted(() => {
  })

</script>

<template>
  <container>
    <div>
      <el-input v-model="val"></el-input>
    </div>
    <div>end</div>
  </container>
</template>
