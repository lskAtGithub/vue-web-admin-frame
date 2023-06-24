<script setup lang="ts">
  import { onMounted } from 'vue'
  import useStore from '@/store'
  import { title } from '@/setting'
  import { useRouter } from 'vue-router'
  import cat from '@/assets/login/cat.png'

  const router = useRouter()
  const { user } = useStore()

  const accoutInfo = {
    account: 'admin',
    password: 'admin'
  }

  onMounted(() => {
  })

  function handleLogin() {
    user.userLogin(accoutInfo).then(() => {
      router.push('/')
    })
  }

</script>

<template>
  <div class="container">
    <div class="login-model">
      <h2>{{ title }} </h2>
      <p class="desc">开箱即用的后台管理系统框架</p>
      <p>
        <el-input v-model="accoutInfo.account" size="large" placeholder="请输入账号" />
      </p>
      <p>
        <el-input v-model="accoutInfo.password" size="large" type="password" placeholder="请输入密码" show-password />
      </p>
      <p>
        <el-button class="login-btn" type="primary" plain @click="handleLogin">登录</el-button>
        <img :src="cat" alt="cat">
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 200px 0;
  background: linear-gradient(to right,#97c6fe, #f2f5ff);
  .desc {
    color: #aaa;
    font-size: 12px;
  }
  .login-btn{
    width: 80%;
  }
}

.login-model {
  width: 500px;
  padding: 50px 80px;
  border-radius: 5px;
  background: #f1f1f1;
  box-shadow: 0 0 5px 0 #97c6fe;
  margin: 0 auto;
  background: url('../../assets/login/login_background.jpg') no-repeat;
  background-size: cover;
}
</style>
