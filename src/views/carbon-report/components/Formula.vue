<script setup lang="ts">
  import { Formula } from '@/api/carbon-report/types';
  import { TableColumnData } from '@arco-design/web-vue';
  import { ref } from 'vue';
  import EmissionTypeSelect from '@/views/carbon-report/components/EmissionTypeSelect.vue';

  defineProps<{
    formula: Formula;
    index: number;
  }>();

  const tableColumns: TableColumnData[] = [
    { title: '数据项名称', dataIndex: 'name' },
    { title: '排放类型', slotName: 'emissionType', width: 120 },
    { title: '消耗量 t', slotName: 'emission' },
    { title: '单位热值含碳量', dataIndex: '' },
    { title: '电力排放因子', dataIndex: '' },
    { title: '碳氧化率', dataIndex: '' },
    { title: '能源消耗量', dataIndex: '' },
    { title: '碳排放量', dataIndex: '' },
    { title: '操作', dataIndex: '' },
  ];
  const data = ref([
    { name: '系统数据项-1' },
    { name: '系统数据项-2' },
    { name: '系统数据项-3', emission: '123' },
    { name: '系统数据项-4', emission: '43.012' },
    { name: '系统数据项-5' },
    { name: '系统数据项-6' },
    { name: '系统数据项-7' },
    { name: '系统数据项-8' },
  ]);
</script>

<template>
  <div class="flex items-center whitespace-nowrap py-12px px-16px">
    <span class="mr-auto text-14px lh-20px">数据表{{ index + 1 }}</span>
    <a-select
      size="small"
      class="w-200px"
      placeholder="请选择计算公式"
    ></a-select>
  </div>

  <a-table
    :data="data"
    :columns="tableColumns"
    :pagination="false"
    :bordered="{ cell: true }"
    :hoverable="false"
  >
    <template #emissionType>
      <EmissionTypeSelect />
    </template>

    <template #emission="{ record }">
      <a-input placeholder="请输入" :default-value="record.emission" />
    </template>
  </a-table>
</template>

<style lang="less" scoped>
  // 表格 - tbody
  :deep(.arco-table-td) {
    background: #fafbfc;
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

  :deep(.arco-input-wrapper, .arco-input-wrapper:hover) {
    background-color: initial;
  }

  :deep(.arco-input-wrapper .arco-input::placeholder) {
    color: #c9cdd4;
  }
</style>
