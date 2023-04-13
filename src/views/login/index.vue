<script setup lang="ts">
  import { onMounted } from 'vue'
  import useStore from '@/store'

  import { useRouter } from 'vue-router'

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
  <div class="login-model">
    <p>
      <el-input v-model="accoutInfo.account" placeholder="请输入账号" />
    </p>
    <p>
      <el-input v-model="accoutInfo.password" type="password" placeholder="请输入密码" show-password />
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
