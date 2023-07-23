<template>
  <div class="container">
    <img class="icon" src="../../assets/login/login_icon.png" alt="icon" />
    <div class="login-model">
      <h2 class="title">{{ title }}</h2>
      <p class="desc">开箱即用的后台管理系统框架</p>
      <p>
        <el-input v-model="accoutInfo.account" size="large" placeholder="请输入账号" />
      </p>
      <p>
        <el-input
          v-model="accoutInfo.password"
          size="large"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </p>
      <p class="login-btn-box">
        <el-button class="login-btn" type="primary" plain @click="handleLogin">登录</el-button>
        <el-button type="primary" text>忘记密码？</el-button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { onMounted } from 'vue'
import useStore from '@/store'
import { title } from '@/setting'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user } = useStore()

const accoutInfo = {
  account: 'admin',
  password: 'admin'
}

onMounted(() => {})

function handleLogin() {
  user.userLogin(accoutInfo).then(() => {
    router.push('/')
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 160px 0;
  background: linear-gradient(to right, #97c6fe, #f2f5ff);

  .icon {
    position: absolute;
    width: 360px;
    left: 60px;
    top: 45px;
  }

  .desc {
    color: #aaa;
    font-size: 12px;
  }

  .title {
    font-size: 32px;
  }

  .login-btn-box {
    display: flex;

    .login-btn {
      width: 40%;
    }
  }
}

.login-model {
  width: 500px;
  padding: 36px 80px;
  border-radius: 5px;
  background: #f1f1f1;
  box-shadow: 0 0 5px 0 #97c6fe;
  margin: 0 50vw;
  background: url('../../assets/login/login_background.jpg') no-repeat;
  background-size: cover;
}
</style>
