<template>
  <container>
    <el-input v-model="val"></el-input>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <Location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import container from '@/components/Container.vue'
import { Location, Setting } from '@element-plus/icons-vue'

onMounted(() => {})

const val = ref('')
const isCollapse = ref(true)
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
