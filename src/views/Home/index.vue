<template>
  <container>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="num-card wait-num">
            <svg-icon class-name="svg-icon" icon-class="audit"></svg-icon>
            <div class="num-wrapper">
              <span class="num-label">待审核</span>
              <count-up class="count-wrapper" ref="countUpRef" :end="waitNum"></count-up>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="num-card over-num">
            <svg-icon class-name="svg-icon" icon-class="over"></svg-icon>
            <div class="num-wrapper">
              <span class="num-label">已提交</span>
              <count-up class="count-wrapper" ref="countUp" :end="overNum"></count-up>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="num-card pass-num">
            <svg-icon class-name="svg-icon" icon-class="pass"></svg-icon>
            <div class="num-wrapper">
              <span class="num-label">已处理</span>
              <count-up class="count-wrapper" ref="countUp" :end="passNum"></count-up>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="num-card reject-num">
            <svg-icon class-name="svg-icon" icon-class="reject"></svg-icon>
            <div class="num-wrapper">
              <span class="num-label">已驳回</span>
              <count-up class="count-wrapper" ref="countUp" :end="rejectNum"></count-up>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </container>
</template>

<script setup lang="ts" name="HomePage">
import { onMounted, ref, reactive, toRefs } from 'vue'
import Container from '@/components/Container.vue'
import CountUp from '@/components/CountUp.vue'

const numState = reactive({
  waitNum: 458,
  overNum: 3546,
  passNum: 8851,
  rejectNum: 356
})
const { waitNum, overNum, passNum, rejectNum } = toRefs(numState)
const countUpRef = ref()
onMounted(() => {})

const initCount = () => {
  countUpRef.value.initCount()
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.num-card {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .num-wrapper {
    flex: 1;
    text-align: left;
    padding: 0 8px;

    .num-label {
      color: #999;
      font-size: 16px;
      display: block;
      margin-bottom: 12px;
    }
  }

  .svg-icon {
    font-size: 80px;
    padding: 10px;
  }

  .count-wrapper {
    display: block;
  }

  &.wait-num {
    color: #67c23a;

    svg {
      &:hover {
        fill: #fff;
        background-color: #67c23a;
        cursor: pointer;
      }
    }
  }

  &.over-num {
    color: #e6a23c;

    svg {
      &:hover {
        fill: #fff;
        background-color: #e6a23c;
        cursor: pointer;
      }
    }
  }

  &.pass-num {
    color: $--theme-color;

    svg {
      &:hover {
        fill: #fff;
        background-color: $--theme-color;
        cursor: pointer;
      }
    }
  }

  &.reject-num {
    color: #f56c6c;

    svg {
      fill: #f56c6c;

      &:hover {
        fill: #fff;
        background-color: #f56c6c;
        cursor: pointer;
      }
    }
  }
}
</style>
