<template>
  <container>
    <section class="chunk">
      <h2>pager-table 基础用法</h2>
      <pager-table v-loading="requestLoading" stripe :pager="pager" border :data="list" :columns="columns">
        <template #address="{ row }">
          这里使用了slot name： <span style="color: green"> {{ row.address }} </span>
        </template>
        <template #operation="{ row }">
          <el-button type="primary" text @click="handleClick(row)">sayHi</el-button>
        </template>
      </pager-table>
    </section>

    <section class="chunk">
      <h2>pager-table 多级表头</h2>
      <p class="desc">由于多级表头并不常见， 所以这里直接使用了插槽去实现</p>
      <pager-table :data="list" style="width: 100%">
        <el-table-column prop="date" label="Date" width="150" />
        <el-table-column label="Delivery Info">
          <template #default>
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column label="Address Info">
              <el-table-column prop="state" label="State" width="120" />
              <el-table-column prop="city" label="City" width="120" />
              <el-table-column prop="address" label="Address" />
              <el-table-column prop="zip" label="Zip" width="120" />
            </el-table-column>
          </template>
        </el-table-column>
      </pager-table>
    </section>

    <section class="chunk">
      <h2>pager-table 多选表格</h2>
      <pager-table v-loading="requestLoading" stripe :pager="pager" border :data="list" :columns="columns2"
        @selection-change="handleSelectionChange" />
    </section>
  </container>
</template>

<script setup lang="ts" name="PagerTableDemo">
  import { ref, reactive, onMounted, watch, toRaw } from 'vue'
  import type { Ref } from 'vue'
  import PagerTable from '@/components/PagerTable/index.vue'
  import container from '@/components/Container.vue'
  import type { pagerTableColumn } from '@/components/PagerTable/types'
  import { ElMessage } from 'element-plus'

  let columns: Array<pagerTableColumn> = [
    { label: 'name', prop: 'name', width: '120px' },
    { label: 'date', formatter: (item: any) => 'formatter -> (' + item.date + ')', headerAlign: 'left' },
    { label: 'address', slotName: 'address', minWidth: '200px' },
    { label: 'operation', slotName: 'operation', width: '200px', fixed: 'right' }
  ]
  let columns2: Array<pagerTableColumn> = [
    { type: 'selection' },
    { label: 'name', prop: 'name', width: '120px' },
    { label: 'date', formatter: (item: any) => 'formatter -> (' + item.date + ')', headerAlign: 'left' },
    { label: 'address', prop: 'address', minWidth: '200px' }
  ]

  let requestLoading: Ref<boolean> = ref(false)
  const pager = reactive({
    total: 100,
    pageSize: 10,
    currentPage: 1
  })
  let list: Ref<any> = ref([])

  onMounted(() => {
    requestLoading.value = true
    setTimeout(() => {
      const data = [
        { date: '2016-05-03', name: 'Tom', address: 'O.o', },
        { date: '2016-05-02', name: 'Jack', address: 'No. 189, Grove St, Los Angeles', },
        { date: '2016-05-04', name: 'Rose', address: 'No. 189, Grove St, Los Angeles', },
        { date: '2016-05-01', name: 'Jason', address: 'No. 189, Grove St, Los Angeles', }
      ]
      list.value = data
      requestLoading.value = false
    }, 2000)
  })

  const handleClick = (row: any) => {
    ElMessage.success(`Hi, ${row.name}`)
  }

  const handleSelectionChange = (selector: Array<any>) => {
    const arr = selector.map(item => toRaw(item).name)
    if (arr && arr.length) {
      ElMessage.success(`当前选中了 ${arr.join('、')}`)
    } else {
      ElMessage.warning(`当前没有任何选中`)
    }
  }

  watch(() => pager.currentPage, () => ElMessage.success('当前页码是' + pager.currentPage))
  watch(() => pager.pageSize, () => ElMessage.success('当前分页大小是' + pager.pageSize))
</script>

<style scoped lang='scss'>
.chunk {
  padding: 36px 0;

  .desc {
    font-size: 12px;
    color: #999;
  }
}
</style>
