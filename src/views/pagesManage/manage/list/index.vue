<template>
  <container>
    <h2>嵌套多层 keep-alive 示例</h2>
    <p> 详情通过query传递id, 编辑通过params动态路由传递id </p>
    <el-row :gutter="20" class="search-box">
      <el-col :span="6">
        <el-input v-model="val1" placeholder="本页面已被缓存"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="val2" placeholder="可以在此输入内容后"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="val3" placeholder="切换路由再看看"></el-input>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-button type="primary" @click="onAdd">新增</el-button>
      </el-col>
    </el-row>

    <el-table :data="useTableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="age" label="年龄" width="120" />
      <el-table-column prop="state" label="国家" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="地址" />
      <el-table-column fixed="right" label="Operations" width="150">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="onDetails(row)">详情</el-button>
          <el-button link type="primary" size="small" @click="onEdit(row)">编辑</el-button>
          <el-button link type="primary" size="small" @click="onRemove">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </container>
</template>

<script setup lang="ts" name="TableManageList">
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useTableData } from '../hooks/index'

import type { ListItem } from '../hooks/type'

const router = useRouter()
const val1 = ref('')
const val2 = ref('')
const val3 = ref('')

const onDetails = (row: ListItem) => {
  router.push({
    path: '/manage/table/detail',
    query: {
      id: row.id
    }
  })
}

const onAdd = () => {
  router.push({
    path: '/manage/table/add'
  })
}

const onEdit = (row: ListItem) => {
  router.push({
    path: `/manage/table/edit/${row.id}`
  })
}

const onRemove = () => {
  ElMessageBox.confirm('正在执行删除操作，是否继续?', '提示', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '操作成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消操作'
      })
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
