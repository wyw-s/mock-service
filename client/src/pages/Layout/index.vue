<script setup>
import SiderBar from './SiderBar.vue';
import Header from './Header.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <SiderBar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-container class="layout-warpper">
          <el-main>
            <el-card>
              <router-view />
            </el-card>
          </el-main>
          <!--<el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
@import "../../assets/variable";

.common-layout {
    height: 100%;
    background: @neutral-1;

    .el-header {
        z-index: 10;
        height: 45px;
        box-shadow: 0px 4px 8px 0px @neutral-5;
    }

    .layout-warpper {
        height: calc(100vh - 46px);
        overflow: auto;

        .el-main {
            padding: 14px;
            background: @neutral-2;
        }
    }

    :deep {
        .el-card__body {
            padding: 14px;
        }
    }
}
</style>
