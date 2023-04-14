<script setup lang="ts" name="TableManageList">
  import { useRouter } from 'vue-router'
  import Container from '@/components/Container.vue'
  import { onMounted, ref } from 'vue'

  onMounted(() => {
  })
  const router = useRouter()
  const val = ref('')

  const handleClick = (item: any) => {
    router.push({
      path: '/manage/table/detail?id=' + item.id,
      query: {
        id: item.id
      }
    })
  }

  const handleAdd = () => {
    router.push({
      path: '/manage/table/add',
      query: {
        id: 1
      }
    })
  }

  const tableData = [
    {
      id: 1,
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      id: 2,
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
    {
      id: 3,
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      id: 4,
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    }
  ]
</script>

<template>
  <container>
    <el-input v-model="val"></el-input>
    <el-button type="primary" @click="handleAdd">Add</el-button>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="handleClick(row)">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </container>
</template>

<style scoped lang='scss'></style> -->

