<script setup lang="ts">
  import { TableColumnData } from '@arco-design/web-vue';
  import { ref } from 'vue';
  import DataItemForm from '@/views/my-data-item/components/DataItemForm.vue';

  const columns: TableColumnData[] = [
    { title: '数据项名称' },
    { title: '备注' },
    { title: '操作' }
  ];

  const formVisible = ref(false);
</script>

<template>
  <div class="my-data-item px-24px py-26px">
    <div class="flex items-center">
      <span class="text-16px lh-32px fw-600 mr-auto">我的数据项</span>
      <a-button type="primary" @click="formVisible = true">新增数据项</a-button>
    </div>

    <a-input
      placeholder="请输入数据项名称搜索"
      class="w-300px mt-26px mb-16px"
    />

    <div class="bg-white p-24px border-rd-4px">
      <a-table :columns="columns"></a-table>
    </div>

    <DataItemForm v-model="formVisible" />
  </div>
</template>
