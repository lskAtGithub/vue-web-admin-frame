<script setup lang="ts">
  import Container from '@/components/Container.vue'
  import UserAccount from './components/UserAccount.vue'
  import TimeLine from './components/TimeLine.vue'
  import TextPicture from '@/components/TextPicture.vue'
  import useStore from '@/store'
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue'

  const { user } = useStore()
  const { userInfo } = storeToRefs(user)

  const activeName = ref('todo')

</script>

<template>
  <container>
    <div class="userinfo-container">
      <div class="info-wrapper">
        <el-card class="info-card" shadow="hover">
          <div class="avatar-wrapper">
            <el-avatar :size="120" :src="userInfo.avatar" />
          </div>
          <text-picture font-size="28px" style="margin: 12px 0;"
            background-img="https://s.cn.bing.net/th?id=OHR.MPPUnesco_ZH-CN8076198158_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50">
            {{ userInfo.nickName }}
          </text-picture>
          <div class="flex-row">
            <span class="label">职位</span>
            <span class="value">{{ userInfo.postTitle }}</span>
          </div>
          <div class="flex-row">
            <span class="label">手机</span>
            <span class="value">{{ userInfo.phone }}</span>
          </div>
          <div class="flex-row">
            <span class="label">邮箱</span>
            <span class="value">{{ userInfo.email }}</span>
          </div>
        </el-card>
      </div>
      <el-card class="other-card" shadow="hover">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="待办事项" name="todo">
            <el-empty description="暂无待办事项" />
          </el-tab-pane>
          <el-tab-pane label="时间线" name="timeLine">
            <time-line></time-line>
          </el-tab-pane>
          <el-tab-pane label="修改资料" name="userAccount">
            <user-account></user-account>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </container>
</template>

<style scoped lang='scss'>
.userinfo-container {
  display: flex;

  .info-wrapper {
    width: 270px;

    .info-card {
      padding: 30px 0 20px 0;
      text-align: center;

      .avatar-wrapper {
        user-select: none;
      }

      .flex-row {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        text-align: left;
        font-size: 13px;

        .label {
          display: inline-block;
          width: 60px;
          flex-shrink: 0;

          &::after {
            content: ":";
            margin: 0 3px;
          }
        }

        .value {
          flex: 1;
        }
      }
    }
  }

  .other-card {
    margin-left: 18px;
    flex: 1;
  }
}
</style>
