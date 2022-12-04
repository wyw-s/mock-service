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
      width="180"
    />
    <el-table-column
      prop="date"
      label="Date"
      width="180"
    />
    <el-table-column
      prop="name"
      label="Name"
      width="180"
    />
    <el-table-column
      prop="address"
      label="Address"
    />
  </el-table>
</template>

<script>
import { getProjectList } from '../../apis';

export default {
  name: 'ProjectList',
  data() {
    return {
      interfaceList: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },]
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
