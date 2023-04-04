<script setup lang="ts">
import { userStore } from '@/store/modules/userStore'
import { ElMessage } from 'element-plus';
import { computed } from 'vue';

const user = userStore();

const userInfo = computed(() => user.userInfo)

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>

<template>
  <el-dropdown @command="handleCommand">
    <header class="avatar-box">
      <el-avatar :size="40" src="https://picx.zhimg.com/80/v2-8537f89e6e5710bfa33c524920c81f6d_720w.webp?source=1940ef5c">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
      <div class="userinfo-name">{{ userInfo.name }}</div>
    </header>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="c">修改密码</el-dropdown-item>
        <el-dropdown-item command="e" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang='scss'>
.avatar-box {
  padding: 0 40px;
  display: flex;
  align-items: center;

  .userinfo-name {
    font-size: 16px;
    margin-left: 6px;
  }
}
</style>
