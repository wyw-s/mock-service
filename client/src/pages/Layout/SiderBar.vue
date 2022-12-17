<template>
  <el-menu
    router
    style="height: 100%"
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/project">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <span>项目列表</span>
    </el-menu-item>
    <el-menu-item index="/interface">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <span>接口列表</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <document/>
      </el-icon>
      <span>历史记录</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting/>
      </el-icon>
      <span>字段定义</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Setting
} from '@element-plus/icons-vue';

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
