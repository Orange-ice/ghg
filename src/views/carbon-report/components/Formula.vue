<script setup lang="ts">
  import { Formula } from '@/api/carbon-report/types';
  import FieldDisplay from '@/views/carbon-report/components/FieldDisplay.vue';

  const props = defineProps<{
    formula: Formula;
    index: number;
  }>();
</script>

<template>
  <div class="flex items-center whitespace-nowrap py-12px px-16px">
    <span class="mr-auto text-14px lh-20px">数据表{{ index + 1 }}</span>
    <a-select
      size="small"
      class="w-200px"
      placeholder="请选择计算公式"
      :model-value="formula.checkedExp"
    >
      <a-option
        v-for="exp in formula.expVoList"
        :key="exp.id"
        :label="exp.name"
        :value="exp.id"
      />
    </a-select>
  </div>

  <a-table
    :data="formula.valuesVoList"
    :pagination="false"
    :bordered="{ cell: true }"
    :hoverable="false"
  >
    <template #columns>
      <a-table-column v-for="(head, i) in formula.fieldsVoList" :key="head.id">
        <template #title> {{ head.name }}</template>
        <template #cell="{ record }">
          <FieldDisplay :field="record.values[i]" />
        </template>
      </a-table-column>
      <a-table-column title="操作" :width="56" fixed="right">
        <template #cell>
          <icon-delete />
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>

<style lang="less" scoped>
  // 表格 - tbody
  :deep(.arco-table-td) {
    height: 48px;
    background: #fafbfc;
  }

  :deep(.arco-table-th-title) {
    font-size: 12px;
    white-space: nowrap;
  }
  // 输入框
  :deep(
      .arco-input-wrapper:focus-within,
      .arco-input-wrapper.arco-input-focus
    ) {
    background-color: initial;
    box-shadow: initial;
    border-color: transparent;
  }

  :deep(.arco-input-wrapper) {
    padding: 0;
  }

  :deep(.arco-table-td-content) {
    font-size: 12px;
  }

  :deep(.arco-input-wrapper, .arco-input-wrapper:hover) {
    background-color: initial;
  }

  :deep(.arco-input-wrapper .arco-input::placeholder) {
    color: #c9cdd4;
    font-size: 12px;
  }
</style>
