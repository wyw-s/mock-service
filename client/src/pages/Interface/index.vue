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
      prop="name"
      label="接口名称"
      width="180"
    />
    <el-table-column
      prop="url"
      label="URL"
      width="180"
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
import { getInterface } from '../../apis';

export default {
  name: 'InterfaceList',
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
      getInterface().then((res) => {
        this.interfaceList = res.data;
      })
    },

    onAdd() {
      this.$router.push('/interface/add')
    }
  }
}
</script>
