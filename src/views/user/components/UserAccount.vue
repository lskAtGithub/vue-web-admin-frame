<template>
  <div class="user-account-container">
    <el-form ref="formRef" :rules="formRules" :model="userInfoForm" label-width="100px">
      <el-form-item label="头像" prop="avatar">
        <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model.number="userInfoForm.nickName" type="text" :placeholder="userInfo.nickName"
          autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model.number="userInfoForm.email" type="text" :placeholder="userInfo.email" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">提 交</el-button>
        <el-button @click="resetForm(formRef)">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import useStore from '@/store'
  import { storeToRefs } from 'pinia'
  import type { FormInstance, FormRules, UploadProps } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'


  const imageUrl = ref('')

  const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
  ) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  }

  const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!')
      return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('Avatar picture size can not exceed 2MB!')
      return false
    }
    return true
  }

  const formRules: FormRules = {
    nickName: [{ required: true, message: '昵称不能为空' }],
    email: [{ required: true, message: '邮箱不能为空' }]
  }
  const { user } = useStore()
  const { userInfo } = storeToRefs(user)
  const formRef = ref<FormInstance>()
  const userInfoForm = reactive({
    nickName: '',
    email: ''
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        ElMessage.success('提交成功!')
      } else {
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>

<style scoped lang='scss'>
.user-account-container {
  padding: 30px 0 20px 0;
}

:deep(.avatar-uploader .avatar) {
  width: 178px;
  height: 178px;
  display: block;
}

:deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

:deep(.avatar-uploader .el-upload:hover) {
  border-color: var(--el-color-primary);
}

:deep(.el-icon.avatar-uploader-icon) {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
