<script setup lang="ts" name="HomePage">
  import { onMounted, ref, reactive, toRefs } from 'vue'
  import Container from '@/components/Container.vue'
  import CountUp from '@/components/CountUp.vue';

  const numState = reactive({
    waitNum: 1745,
    overNum: 3546,
    passNum: 8851,
    rejectNum: 356
  })
  const { waitNum, overNum, passNum, rejectNum } = toRefs(numState)
  const countUp = ref()
  onMounted(() => {
  })

  const initCount = () => {
    countUp.value.initCount()
  }

</script>

<template>
  <container>
    <div>
      <svg-icon class-name="audit-icon" icon-class="audit"></svg-icon>
      <el-button @click="initCount">init count up</el-button>
    </div>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card class="num-card wait-num" shadow="hover">
          <span class="num-label">待审核</span>

          <div>
            <count-up ref="countUp" :end="waitNum"></count-up>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="num-card over-num" shadow="hover">
          <span class="num-label">已提交</span>
          <div>
            <count-up ref="countUp" :end="overNum"></count-up>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="num-card pass-num" shadow="hover">
          <span class="num-label">已处理</span>
          <div>
            <count-up ref="countUp" :end="passNum"></count-up>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="num-card reject-num" shadow="hover">
          <span class="num-label">已驳回</span>
          <div>
            <count-up ref="countUp" :end="rejectNum"></count-up>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </container>
</template>

<style scoped lang="scss">
.num-card {
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  .num-label {
    color: #999;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 12px;
  }

  &.wait-num {
    color: #67C23A;
  }

  &.over-num {
    color: #E6A23C;
  }

  &.pass-num {
    color: #909399;
  }

  &.reject-num {
    color: #F56C6C;
  }
}
</style>