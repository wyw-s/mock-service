<template>
  <el-page-header @back="goBack">
    <el-form
      :model="form"
      label-width="120px"
      style="margin-top: 16px"
    >
      <el-form-item label="接口名称">
        <el-input
          v-model="form.name"
          placeholder="请求路径"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="form.method"
              placeholder="请求方法"
              style="width: 115px"
            >
              <el-option
                label="GET"
                value="GET"
              />
              <el-option
                label="POST"
                value="POST"
              />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="请求体">
        <el-input
          v-model="form.body"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="Please input"
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
export default {
  name: 'InterfaceName',
  data() {
    return {
      form: {}
    }
  },

  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
