<template>
  <el-dropdown @command="handleCommand">
    <header class="avatar-box">
      <el-avatar shape="square" :size="40" :src="userInfo.avatar">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
    </header>
    <template #dropdown>
      <el-dropdown-menu>
        <div class="userinfo-name">{{ userInfo.nickName }}</div>
        <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
        <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useStore from '@/store/index'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const { user } = useStore()
const router = useRouter()
const { userInfo } = storeToRefs(user)

const onGotoUserInfo = () => {
  router.push({
    path: '/userInfo'
  })
}

const onChangePwd = () => {
  router.push({
    path: '/changePwd'
  })
}

const onLogout = () => {
  ElMessageBox.confirm('您正在执行退出登录操作，是否继续?', '提示', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'warning'
  })
    .then(() => {
      user.userLogout().then(() => {
        ElMessage.success('已退出登录')
        router.push({
          path: '/login'
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消操作'
      })
    })
}

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'userInfo':
      onGotoUserInfo()
      break
    case 'changePwd':
      onChangePwd()
      break
    case 'logout':
      onLogout()
      break

    default:
      break
  }
}
</script>

<style scoped lang="scss">
:deep(.el-dropdown:focus) {
  outline: none !important;
}

:deep(.el-dropdown > header:focus-visible) {
  outline: none !important;
}

.avatar-box {
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-right: 12px;

  &:focus-visible {
    outline: none !important;
  }
}

.userinfo-name {
  text-align: center;
  padding: 2px 0;
  margin: 5px;
  background: #c4c5c9;
  font-size: 12px;
  border-radius: 3px;
  color: #444;
}
</style>
