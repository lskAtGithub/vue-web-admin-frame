<template>
  <div class="container">
    <el-icon>
      <Search />
    </el-icon>
    <el-autocomplete v-show="isSearch" v-model="keyword" :fetch-suggestions="querySearch" clearable class="inline-input w-50"
      placeholder="Please Input Menu Name" @select="handleSelect" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import type { Ref } from 'vue'

  let keyword: Ref<string> = ref('')
  let isSearch: Ref<boolean> = ref(false)

  const querySearch = (keyword, cb) => {
    
  }

  const handleSelect = (router) => {

  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container {
  margin-right: 12px;

  .icon-box {
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }

}
</style>
