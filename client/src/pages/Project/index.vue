<template>
  <el-space style="display: flex; justify-content: space-between">
    <el-space>
      <el-input>
        新增
      </el-input>
    </el-space>
    <el-space>
      <el-button
        type="primary"
        @click="onAdd"
      >
        新增
      </el-button>
    </el-space>
  </el-space>
  <el-table
    :data="interfaceList"
    max-height="500"
  >
    <el-table-column
      prop="id"
      label="id"
      width="80"
    />
    <el-table-column
      prop="projectName"
      label="项目名称"
    />
    <el-table-column
      prop="createTime"
      label="创建时间"
    />
    <el-table-column
      prop="remark"
      label="备注"
    />
  </el-table>
</template>

<script>
import { getProjectList } from '../../apis';

export default {
  name: 'ProjectList',
  data() {
    return {
      interfaceList: []
    }
  },
  mounted() {
    this.getInterfaceList();
  },

  methods: {
    getInterfaceList() {
      getProjectList().then((res) => {
        this.interfaceList = res.data;
      })
    },

    onAdd() {
      this.$router.push('/project/add')
    }
  }
}
</script>
