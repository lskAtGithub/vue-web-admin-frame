<template>
  <container>
    <h2>富文本示例</h2>
    <p>基于 tinymce@5.6.0 改造</p>
    <div v-loading="loading">
      <tinymce :value="rtf"></tinymce>
    </div>
  </container>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Container from '@/components/Container.vue'
import Tinymce from '@/components/Tinymce/index.vue'

import type { Ref } from 'vue'

const demoText = `
<h2 style="text-align: center;">这是一个富文本</h2>
<p style="text-align: left; text-indent: 2em;">Tinymce@5.6.0， 该安装包置根节点的 <span style="text-decoration: underline;">public </span>下， 插件可配置，自行放置于&nbsp; /tinymce/plugins 文件下</p>
<p style="text-align: left; text-indent: 2em;">建议把该文件夹放到服务器上，然后修改访问地址即可</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 10.4128%;">1</td>
<td style="width: 10.4128%;">2</td>
<td style="width: 10.4128%;">3</td>
<td style="width: 10.4128%;">4</td>
<td style="width: 10.4128%;">5</td>
<td style="width: 10.4128%;">6</td>
<td style="width: 10.4128%;">7</td>
<td style="width: 10.4128%;">8</td>
</tr>
<tr>
<td style="width: 10.4128%;">A</td>
<td style="width: 10.4128%;">B</td>
<td style="width: 10.4128%;">C</td>
<td style="width: 10.4128%;">D</td>
<td style="width: 10.4128%;">E</td>
<td style="width: 10.4128%;">F</td>
<td style="width: 10.4128%;">G</td>
<td style="width: 10.4128%;">H</td>
</tr>
<tr>
<td style="width: 10.4128%;">a</td>
<td style="width: 10.4128%;">b</td>
<td style="width: 10.4128%;">c</td>
<td style="width: 10.4128%;">d</td>
<td style="width: 10.4128%;">e</td>
<td style="width: 10.4128%;">f</td>
<td style="width: 10.4128%;">g</td>
<td style="width: 10.4128%;">h</td>
</tr>
<tr>
<td style="width: 10.4128%;">i</td>
<td style="width: 10.4128%;">ii</td>
<td style="width: 10.4128%;">iii</td>
<td style="width: 10.4128%;">iv</td>
<td style="width: 10.4128%;">v</td>
<td style="width: 10.4128%;">vi</td>
<td style="width: 10.4128%;">vii</td>
<td style="width: 10.4128%;">viii</td>
</tr>
</tbody>
</table>
`

let rtf: Ref<string> = ref('')
let loading: Ref<boolean> = ref(false)

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    rtf.value = demoText
    loading.value = false
  }, 2000)
})
</script>

<style scoped lang="scss"></style>
