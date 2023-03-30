<script lang="ts" setup>
import PageTitleUtils from '@/utils/PageTitleUtils'
import { systemStore } from '@/store/modules/systemStore'

const title = PageTitleUtils.getPageTitle('');
const systemInstans = systemStore();

function handleTogleSide() {
  systemInstans.changeCollapse()
}
</script>

<template>
  <div class="header-topbar-box">
    <div class="left-side">
      <div> {{ icon }} </div>
      <div>{{ title }}</div>
    </div>
    <div class="info-box" @click="handleTogleSide">
      这里是个人信息区域
    </div>
  </div>
</template> 

<style scoped lang="scss">
@import '@/styles/variables.scss';

.header-topbar-box {
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 1px #000;
  margin-bottom: 1px;
  display: flex;
  align-items: center;

  .left-side {
    text-align: center;
    width: $--menu-width;
    border-right: 1px solid #dcdfe6;
  }

  .info-box {
    flex: 1;
    padding: 0 18px;
    text-align: right;
  }
}
</style>
