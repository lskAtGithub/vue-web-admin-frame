<template>
  <div class="container">
    <el-icon class="icon-box">
      <Search />
    </el-icon>
    <svg-icon class-name="svg-icon" icon-class="fullscreen"></svg-icon>
    <svg-icon class-name="svg-icon" icon-class="fullscreen-exit"></svg-icon>

    <el-popover placement="bottom" :width="300" trigger="hover">
      <template #reference>
        <el-badge :is-dot="true">
          <el-icon class="icon-box">
            <Message />
          </el-icon>
        </el-badge>
      </template>
      <div class="message-box">
        <el-tabs v-model="activeName" class="demo-tabs" stretch>
          <el-tab-pane label="未读" name="wait">
            <el-collapse accordion>
              <el-collapse-item v-for="(item, index) in messageList" :key="index" :title="item.title" :name="index">
                <div class="message-content">
                  {{ item.content }}
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="已读" name="done">
            <el-empty description="暂无已读消息" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup name="FunctionalArea">
  import { ref } from 'vue'

  let activeName = ref('wait')
  const messageList = ref([
    { title: 'Message Title', content: 'This is a notification message. Please reply upon receipt' },
    { title: 'Message Title', content: 'This is a notification message. Please reply upon receipt' },
    { title: 'Message Title', content: 'This is a notification message. Please reply upon receipt' },
    { title: 'Message Title', content: 'This is a notification message. Please reply upon receipt' },
    { title: 'Message Title', content: 'This is a notification message. Please reply upon receipt' },
  ])
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.container {
  font-size: 20px;
  display: flex;
  align-items: center;

  .icon-box {
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }

  .svg-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      color: $--theme-color
    }
  }
}
</style>
