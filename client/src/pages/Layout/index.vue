<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-container class="layout-warpper">
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="less">
.common-layout {
    background: #ffffff;

    .layout-warpper {
        height: calc(100vh - 60px);
        overflow: auto;
    }
}
</style>
