<template>
  <container>
    <section class="chunk">
      <h2>pager-table 基础用法</h2>
      <pager-table stripe :pager="pager" border :data="list" :columns="columns">
        <template #address="{ row }">
          这里使用了slot name： <span style="color: green"> {{ row.address }} </span>
        </template>
      </pager-table>
    </section>

    <section class="chunk">
      <h2>pager-table 多级表头</h2>
      <pager-table stripe :pager="pager" border :data="list" :columns="columns">
        <template #address="{ row }">
          这里使用了slot name： <span style="color: green"> {{ row.address }} </span>
        </template>
      </pager-table>
    </section>
  </container>
</template>

<script setup lang="ts" name="PagerTableDemo">
  import { ref, reactive } from 'vue'
  import PagerTable from '@/components/PagerTable/index.vue'
  import container from '@/components/Container.vue'
  import type { pagerTableColumn } from '@/components/PagerTable/types'

  const pager = reactive({
    total: 100,
    pageSize: 10,
    currentPage: 2
  })
  let list = ref([
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'O.o',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ])
  let columns: Array<pagerTableColumn> = [
    { label: 'name', prop: 'name', width: '120px' },
    { label: 'date', formatter: (item: any) => 'formatter -> (' + item.date + ')', headerAlign: 'left' },
    { label: 'address', slotName: 'address', minWidth: '200px' }
  ]

</script>

<style scoped lang='scss'>
.chunk {
  padding: 36px 0;
}
</style>
