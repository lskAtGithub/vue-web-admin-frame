<script setup lang="ts">
  import Container from '@/components/Container.vue'
  import useStore from '@/store'
  import { storeToRefs } from 'pinia';


  const { user } = useStore()
  const { userInfo } = storeToRefs(user)
</script>

<template>
  <container>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card class="info-wrapper" shadow="hover">
          <div class="avatar-wrapper">
            <el-avatar :size="120" :src="userInfo.avatar" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover"> Hover </el-card>
      </el-col>
    </el-row>
  </container>
</template>

<style scoped lang='scss'>
.info-wrapper {
  padding: 30px 0 20px 0;

  .avatar-wrapper {
    user-select: none;
    text-align: center;
  }
}
</style>
