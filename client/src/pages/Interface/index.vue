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
    highlight-current-row
  >
    <el-table-column
      prop="name"
      label="接口名称"
      width="180"
      show-overflow-tooltip
    />
    <el-table-column
      prop="url"
      label="URL"
      show-overflow-tooltip
    />
    <el-table-column
      prop="projectName"
      label="项目名称"
      width="180"
      show-overflow-tooltip
    />
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="180"
    />
    <el-table-column
      prop="remark"
      label="备注"
      width="220"
      show-overflow-tooltip
    />
    <el-table-column
      prop="opt"
      label="操作"
      width="180"
    >
      <template #default="scope">
        <el-space>
          <el-link type="primary" @click="onlineTest(scope.row)">
            预览
          </el-link>
          <el-link type="primary" @click="onCopy(scope.row)">
            复制
          </el-link>
          <el-link type="primary" @click="onModify(scope.row)">
            修改
          </el-link>
          <el-link type="danger" @click="onDel(scope.row)">
            删除
          </el-link>
        </el-space>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-block">
    <el-pagination
      :current-page="pagination.pageNum"
      :page-size="pagination.pageSize"
      :page-sizes="[10, 20, 40, 100]"
      background="background"
      layout="total, prev, pager, next, sizes"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <el-drawer size="50%" v-model="drawer" :with-header="false" :direction="'ltr'">
    <el-card shadow="always" style="margin-bottom: 16px">
      <el-descriptions column="2">
        <el-descriptions-item label="接口名称：">{{ row.name }}</el-descriptions-item>
        <el-descriptions-item label="项目名称：">{{ row.projectName }}</el-descriptions-item>
        <el-descriptions-item label="URL：" span="2">{{ row.url }}</el-descriptions-item>
        <el-descriptions-item label="环境地址：" span="2">{{ row.envUrl }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <div style="height: calc(100% - 160px)">
      <CodeMirror v-model="code" />
    </div>
  </el-drawer>
</template>

<script>
import CodeMirror from '../../components/CodeMirror.vue';
import http from '../../apis/http';
import { getInterface, delMockInterface, createInterface } from '../../apis';
import { ElMessage } from 'element-plus';

export default {
  name: 'InterfaceList',
  components: {
    CodeMirror
  },
  data() {
    return {
      interfaceList: [],
      drawer: false,
      code: '',
      row: {},
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  mounted() {
    this.getInterfaceList();
  },

  methods: {
    getInterfaceList() {
      getInterface({
        pageNum: this.pagination.pageNum,
        pageSize: this.pagination.pageSize,
      }).then((res) => {
        this.pagination.total = res.data.total || 0;
        this.interfaceList = res.data.list;
      })
    },

    onAdd() {
      this.$router.push('/interface/add')
    },

    onlineTest(row) {
      this.drawer = true;
      this.row = {
        ...row,
        envUrl: `${window.location.origin}/8mock/${row.projectId}`
      };
      http.get(`/8mock/${row.projectId}${row.url}`).then(res => {
        this.code = JSON.stringify(res, null, 2);
      })
    },

    onModify(row) {
      this.$router.push({
        path: '/interface/add',
        query: {
          mockId: row.id
        }
      })
    },

    onCopy(row) {
      createInterface({
        projectId: row.projectId,
        name: row.name,
        url: `${row.url}/copy-${Math.floor(Math.random() * 100000)}`,
        response: row.response,
        remark: row.remark
      }).then((res) => {
        if (res.success) {
          ElMessage({
            message: '复制成功',
            type: 'success'
          });
          this.getInterfaceList();
        }
      });
    },

    onDel(row) {
      delMockInterface({ id: row.id }).then((res) => {
        if (res.success) {
          ElMessage({
            message: '删除成功',
            type: 'success'
          });
          this.getInterfaceList();
        }
      })
    },

    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.getInterfaceList();
    },

    handleCurrentChange(val) {
      this.pagination.pageNum = val;
      this.getInterfaceList();
    },
  }
}
</script>

<style scoped lang="less">
.el-drawer__body {
  padding: 10px;
}
.pagination-block {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}
</style>
