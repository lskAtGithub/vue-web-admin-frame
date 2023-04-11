<script setup lang="ts">
import { getMenu } from '@/api/user/index'
import { onMounted } from 'vue'
import { userStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = {
  account: 'admin',
  password: 'admin'
}

onMounted(() => {
  getMenu().then(res => {
    console.log(res)
  })
})

function handleLogin() {
  userStore().userLogin(user).then(()=>{
    router.push('/home/homePage')
  })
}

</script>

<template>
  <div class="login-model">
    <p>
      <el-input v-model="user.account" placeholder="请输入账号" />
    </p>
    <p>
      <el-input v-model="user.password" type="password" placeholder="请输入密码" show-password />
    </p>
    <p>
      <el-button type="primary" plain @click="handleLogin">登录</el-button>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.login-model {
  width: 500px;
  padding: 50px 80px;
  border-radius: 5px;
  background: #f1f1f1;
  box-shadow: 0 0 5px 0 #eee;
  margin: 200px auto 0;
}
</style>
