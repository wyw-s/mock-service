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
                        <router-view />
                    </el-main>
                    <!--<el-footer>Footer</el-footer>-->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="less">
.common-layout {
    height: 100%;
    background: #ffffff;

    .el-header {
        height: 45px;
        box-shadow: 0px 4px 8px 0px #e1e4e3;
    }

    .layout-warpper {
        height: calc(100vh - 46px);
        overflow: auto;
    }
}
</style>
