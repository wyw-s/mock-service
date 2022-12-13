<template>
  <el-page-header title="返回" @back="goBack">
    <template #content>
      {{ title }}接口
    </template>
    <template #extra>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </template>
    <el-form
      :model="form"
      label-width="120px"
      style="margin-top: 16px"
    >
      <el-form-item label="项目名称">
        <el-select v-model="form.projectId" placeholder="项目名称">
          <el-option
            v-for="item in projectList"
            :key="item.id"
            :label="item.projectName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="接口名称">
        <el-input
          v-model="form.name"
          placeholder="接口名称"
        />
      </el-form-item>
      <el-form-item label="接口URL">
        <el-input
          v-model="form.url"
          placeholder="请求路径"
        />
      </el-form-item>
      <el-form-item label="响应体">
        <div style="height: 400px; width: 100%">
          <CodeMirror v-model="form.response" />
        </div>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          v-model="form.remark"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="请输入备注"
        />
      </el-form-item>
    </el-form>
  </el-page-header>
</template>

<script>
import CodeMirror from '../../components/CodeMirror.vue';
import { createInterface, getProjectList, getMockDetail, updateMock } from '../../apis';
import { ElMessage } from 'element-plus';

export default {
  name: 'InterfaceName',
  components: {
    CodeMirror
  },
  data() {
    return {
      form: {},
      projectList: [],
      mockId: '',
      title: '新增'
    }
  },
  mounted() {
    const { query: { mockId } } = this.$route;
    if (mockId) {
      this.mockId = mockId;
      this.title = '修改';
      this.getMockDetail(mockId);
    }

    this.getProjectList();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getProjectList() {
      getProjectList().then((res) => {
        if (res.success) {
          this.projectList = res.data;
        }
      })
    },
    getMockDetail(id) {
      getMockDetail(id).then((res) => {
        if (res.success) {
          this.form = res.data;
        }
      })
    },
    onSubmit() {
      if (this.mockId) {
        updateMock(this.mockId, this.form).then((res) => {
          if (res.success) {
            ElMessage({
              message: '修改成功',
              type: 'success'
            });
            this.$router.back();
          }
        })
      } else {
        createInterface(this.form).then((res) => {
          if (res.success) {
            ElMessage({
              message: '创建成功',
              type: 'success'
            });
            this.$router.back();
          }
        });
      }
    }
  }
}
</script>
