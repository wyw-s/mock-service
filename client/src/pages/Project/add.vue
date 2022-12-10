<template>
  <el-page-header @back="goBack">
    <el-form
      :model="form"
      label-width="120px"
      style="margin-top: 16px"
    >
      <el-form-item label="项目名称">
        <el-input
          v-model="form.projectName"
          placeholder="项目名称"
          class="input-with-select"
        />
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          v-model="form.remark"
          placeholder="备注"
          class="input-with-select"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          创建
        </el-button>
      </el-form-item>
    </el-form>
  </el-page-header>
</template>

<script>
// import CodeMirror from '../../components/CodeMirror.vue';
import { createProject } from '../../apis';
import { ElMessage } from 'element-plus';

export default {
  name: 'CreateProject',
  components: {
    // CodeMirror
  },
  data() {
    return {
      form: {}
    };
  },

  methods: {
    goBack() {
      this.$router.back();
    },
    onSubmit() {
      createProject(this.form).then((res) => {
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
};
</script>
