<script setup lang="ts">
  import Container from '@/components/Container.vue'
  import useStore from '@/store'
  import { storeToRefs } from 'pinia'
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import type { FormInstance, FormRules } from 'element-plus'
  import ValidateUtils from '@/utils/ValidateUtils'

  const validatePwd = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('密码不能为空, 请输入'))
    } else {
      if (ValidateUtils.validatePassword(value)) {
        callback()
      }
      callback(new Error('密码必须包含大小写字母,特殊字符和数字，长度为8-12位'))
    }
  }

  const ruleFormRef = ref<FormInstance>()
  // do not use same name with ref
  const formData = reactive({
    oldPassword: '',
    password: '',
    newPassword: '',
  })

  const formRules = reactive<FormRules>({
    password: [{ validator: validatePwd, trigger: 'blur' }],
    newPassword: [{ validator: validatePwd, trigger: 'blur' }],
    oldPassword: [{ validator: validatePwd, trigger: 'blur' }],
  })

  const onSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        ElMessage.success("提交成功")
      } else {
        return false
      }
    })
  }
  const { user } = useStore()
  const { userInfo } = storeToRefs(user)
</script>

<template>
  <container>
    <el-row justify="center" @onSubmit.stop>
      <el-col :span="18">
        <el-form :model="formData" status-icon ref="ruleFormRef" :rules="formRules" label-width="120px">
          <el-form-item label="账号">
            <el-input v-model="userInfo.nickName" disabled />
          </el-form-item>
          <el-form-item label="原始密码" prop="oldPassword">
            <el-input v-model="formData.oldPassword" type="password" />
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input v-model="formData.password" type="password" />
          </el-form-item>
          <el-form-item label="再次输入" prop="newPassword">
            <el-input v-model="formData.newPassword" type="password" />
          </el-form-item>

          <el-form-item>
            <el-button @click="onSubmit(ruleFormRef)" type="primary">确 认</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </container>
</template>

<style scoped lang='scss'></style>
