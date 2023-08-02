<template>
  <container>
    <h2>本页面被缓存了</h2>
    <el-row :gutter="20" class="search-box">
      <el-col :span="6">
        <el-input v-model="val1" placeholder="输入的内容会被缓存"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="val2" placeholder="可以在此输入"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="val3" placeholder="切换tagview再看"></el-input>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-button type="primary" @click="handleAdd">Add</el-button>
      </el-col>
    </el-row>

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

<script setup lang="ts" name="TableManageList">
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import { ref, onMounted } from 'vue'

const router = useRouter()
const val1 = ref('')
const val2 = ref('')
const val3 = ref('')

const tableData = [
  {
    id: 1,
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    id: 2,
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  },
  {
    id: 3,
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }
]

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
</script>

<style scoped lang="scss">
.search-box {
  margin-bottom: 20px;
}
.align-right {
  text-align: right;
}
</style>
