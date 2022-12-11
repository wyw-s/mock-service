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
    row-key="id"
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
    <el-table-column
      prop="opt"
      label="操作"
    >
      <template #default="scope">
        <el-space>
          <el-link type="primary" @click="onlineTest(scope.row)">
            预览
          </el-link>
          <el-link type="primary" @click="onModify(scope.row)">
            修改
          </el-link>
        </el-space>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import http from '../../apis/http';
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
    },

    onlineTest(row) {
      http.get(`/8mock/${row.projectId}${row.url}`).then(res => {

      })
    },

    onModify(row) {
      this.$router.push({
        path: '/interface/add',
        query: {
          mockId: row.id
        }
      })
    }
  }
}
</script>
