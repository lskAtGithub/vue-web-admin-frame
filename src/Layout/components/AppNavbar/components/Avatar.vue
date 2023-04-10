<script setup lang="ts">
import { userStore } from '@/store/modules/userStore'
import { ElMessage, ElMessageBox } from 'element-plus'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const user = userStore()
const router = useRouter()

const userInfo = computed(() => user.userInfo)

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
  ElMessageBox.confirm(
    '您正在执行退出登录操作，是否继续?',
    '提示',
    {
      confirmButtonText: '确 认',
      cancelButtonText: '取 消',
      type: 'warning',
    }
  )
    .then(() => {
      user.userLogout().then(() => {
        ElMessage.success("已退出登录")
        router.push({
          path: '/login'
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消操作',
      })
    })
}

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'userInfo':
      onGotoUserInfo()
      break;
    case 'changePwd':
      onChangePwd()
      break;
    case 'logout':
      onLogout()
      break;

    default:
      break;
  }
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
        <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
        <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang='scss'>
:deep(.el-dropdown:focus) {
  outline: none !important;
}

:deep(.el-dropdown>header:focus-visible) {
  outline: none !important;
}

.avatar-box {
  padding: 0 40px;
  display: flex;
  align-items: center;

  .userinfo-name {
    font-size: 16px;
    margin-left: 6px;
  }

  &:focus-visible {
    outline: none !important;
  }

}
</style>
