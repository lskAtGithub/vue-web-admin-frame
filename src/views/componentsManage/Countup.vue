<template>
  <container>
    <div class="count-up-box">
      <span class="label">数字滚动：</span>
      <count-up ref="CountUpRef" :end="options.endValue" :options="options" />
    </div>
    <el-form class="form" :model="options" label-width="120px" label-position="right">
      <el-form-item label="开始值">
        <el-input v-model="options.startVal" />
      </el-form-item>
      <el-form-item label="结束值">
        <el-input v-model="options.endValue" />
      </el-form-item>
      <el-form-item label="动画秒数">
        <el-input v-model="options.duration" />
      </el-form-item>
      <el-form-item label="小数位数">
        <el-input v-model="options.decimalPlaces" />
      </el-form-item>
      <el-form-item label="分割字符">
        <el-input v-model="options.separator" />
      </el-form-item>
      <el-form-item label="小数分割符">
        <el-input v-model="options.decimal" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onStart">开始</el-button>
      </el-form-item>
    </el-form>
  </container>
</template>

<script lang="ts" setup name="CountUpDemo">
  import { ref, reactive } from 'vue'
  import container from '@/components/Container.vue'
  import CountUp from '@/components/CountUp.vue'

  let options = reactive({
    startVal: 0, // 开始的数字  一般设置0开始
    endValue: 500,
    decimalPlaces: 0, // number类型 小数位数
    duration: 2, // number类型 动画延迟秒数，默认值是2
    useGrouping: true, // boolean类型  是否开启逗号，默认true(1,000)false(1000)
    useEasing: true,  // boolean类型 动画缓动效果(ease),默认true
    smartEasingThreshold: 300, // number类型 大于这个数值的值开启平滑缓动
    smartEasingAmount: 300, // number类型
    separator: ',',// string 类型 分割用的符号
    decimal: '.', // string 类型  小数分割符合
    prefix: '', // string 类型  数字开头添加固定字符
    suffix: '', // string类型 数字末尾添加固定字符
    numerals: []  // Array类型 替换从0到9对应的字，也就是自定数字字符了,数组存储
  })
  const CountUpRef = ref(null) as any

  const onStart = () => {
    CountUpRef.value.initCount()
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.count-up-box {
  font-size: 48px;
  color: $--theme-color;
  text-align: center;
  margin: 36px 0;

  .label {
    font-size: 36px;
    color: #666;
  }
}

.form {
  width: 500px;
  margin: 0 auto;
}
</style>
