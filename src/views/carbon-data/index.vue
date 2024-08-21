<script setup lang="ts">
  import { TableColumnData } from '@arco-design/web-vue';

  const columns: TableColumnData[] = [
    { title: '碳数据核查/上报时间' },
    { title: '填报周期' },
    { title: '核算标准' },
    { title: '行业' },
    { title: '版本' },
    { title: '操作' }
  ];
</script>
<template>
  <div class="carbon-data my-26px mx-24px">
    <h3 class="text-16px lh-32px fw-600">数据管理</h3>
    <div class="flex mt-26px mb-20px">
      <a-select class="w-200px" placeholder="请选择填报周期"></a-select>
      <a-select class="w-200px mx-12px" placeholder="请选择核算标准"></a-select>
      <a-select class="w-200px" placeholder="请选择行业"></a-select>
      <a-button class="ml-12px">清除条件</a-button>
    </div>
    <div class="p-24px bg-white">
      <a-table :columns="columns"></a-table>
    </div>
  </div>
</template>
