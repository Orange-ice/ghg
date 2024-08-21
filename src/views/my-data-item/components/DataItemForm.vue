<script setup lang="ts">
  import { reactive } from 'vue';

  const modelValue = defineModel<boolean>();

  const formModel = reactive({});
</script>
<template>
  <a-drawer v-model:visible="modelValue" title="新增数据项" :width="440">
    <a-form :model="formModel" layout="vertical" class="mt-12px">
      <a-form-item label="数据项名称">
        <a-input placeholder="请输入新工序名称" />
      </a-form-item>
      <a-form-item label="备注">
        <a-textarea placeholder="请输入新工序备注信息"></a-textarea>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>
