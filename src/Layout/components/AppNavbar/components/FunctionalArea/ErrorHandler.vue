<template>
  <div v-if="hasShowBug">
    <el-badge :is-dot="errorStore.isNewError">
      <svg-icon class-name="svg-icon" icon-class="bug" @click="showBug" />
    </el-badge>

    <el-dialog v-model="bugListVisible" title="错误监听列表" width="980">
      <pager-table :data="errorInfo" :columns="columns">
        <template #empty>
          <el-empty description="暂无数据" />
        </template>
        <template #operation="{ row }">
          <el-button link type="primary" size="small" @click="onCopy(row)">复制详细信息</el-button>
          <el-button link type="danger" size="small" @click="onRemove(row)">删除</el-button>
        </template>
      </pager-table>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useStore from '@/store/index'
import IndexUtils from '@/utils/Index'
import PagerTable from '@/components/PagerTable/index.vue'
import { storeToRefs } from 'pinia'
import { ElMessageBox, ElMessage } from 'element-plus'
import ToolUtils from '@/utils/ToolUtils'

import type { Ref } from 'vue'
import type { IErrorItem } from '@/Types/ErrorInfo'

let columns = [
  { label: '序号', prop: 'id', width: 60 },
  { label: '标题', prop: 'title', width: 180 },
  { label: 'url', prop: 'url', width: 180 },
  { label: '创建时间', prop: 'createTime', width: 180 },
  { label: '详细信息', prop: 'info', width: 580, 'show-overflow-tooltip': true },
  { label: '操作', slotName: 'operation', fixed: 'right', width: 180 }
]

const { errorStore } = useStore()
const { errorInfo, isShowBugHandler, errorSize } = storeToRefs(errorStore)
let bugListVisible: Ref<boolean> = ref(false)

const showBug = () => {
  bugListVisible.value = true
  errorStore.toggleReadStatus(false)
}

const onRemove = (row: IErrorItem) => {
  ElMessageBox.confirm('正在删除本条bug记录，是否继续?', 'Warning', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      errorStore.removeError(row.id)
      ElMessage.success('删除成功')
    })
    .catch(() => {
      ElMessage.info('已取消')
    })
}

const onCopy = (row: IErrorItem) => {
  ToolUtils.copyText(row.info)
  ElMessage.success('复制成功')
}

const hasShowBug = () => {
  return IndexUtils.isDevelopment() && isShowBugHandler
}
</script>

<style scoped lang="scss">
.svg-icon {
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-bottom: 2px;
  cursor: pointer;
}
</style>
