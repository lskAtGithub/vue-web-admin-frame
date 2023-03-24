<script setup lang="ts">
import { getMenu } from '@/api/user'
import { onMounted } from 'vue'
import { useStore } from '@/store/index'

const counterStore  = useStore()

onMounted(() => {
  counterStore.couter++;
  console.log(counterStore.couter)
  
  getMenu().then(res => {
    console.log(res);
  })
})
function handleChange() {
  counterStore.name = 'This is new counterStore name'
}
function handleReset() {
  counterStore.$reset()
}
</script>

<template>
  <div>
    <p>Store 的name是 {{ counterStore.name }},</p>
    <p>Store 的couter是 {{ counterStore.couter }}</p>
    <button @click="handleChange">改变name</button>
    <button @click="handleReset">reset counterStore</button>
  </div>
</template>
