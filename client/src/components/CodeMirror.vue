<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '100%', width: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script>
import { Codemirror } from 'vue-codemirror';
import { json } from '@codemirror/lang-json';
import { oneDark } from '@codemirror/theme-one-dark';

export default {
  components: {
    Codemirror
  },
  props: ['modelValue'],
  data() {
    return {
      code: '',
      view: {},
      extensions: [json(), oneDark]
    };
  },
  watch: {
    modelValue(a) {
      this.code = a;
    }
  },
  methods: {
    handleReady(payload) {
      this.view.value = payload.view;
    },
    log(type, value) {
      if(type === 'change') {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>
