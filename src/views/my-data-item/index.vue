<script setup lang="ts">
  import { TableColumnData } from '@arco-design/web-vue';
  import { reactive, ref } from 'vue';
  import DataItemForm from '@/views/my-data-item/components/DataItemForm.vue';
  import {
    getDataItemPage,
    MyDataItem,
    removeDateItem
  } from '@/api/myDataItem';
  import useLoading from '@/hooks/loading';
  import TextButton from '@/components/TextButton.vue';
  import { ClosedFunc } from '@/types/global';

  const columns: TableColumnData[] = [
    { title: '数据项名称', dataIndex: 'name' },
    {
      title: '备注',
      dataIndex: 'remark',
      slotName: 'remark',
      ellipsis: true,
      tooltip: true
    },
    { title: '操作', slotName: 'operation' }
  ];

  const formVisible = ref(false);

  const query = reactive({
    name: ''
  });
  const pager = reactive({
    pageNum: 1,
    pageSize: 10
  });
  const total = ref(0);
  const tableData = ref<MyDataItem[]>([]);
  const { loading, setLoading } = useLoading(false);
  const currentRecord = ref<MyDataItem>();

  const queryDataItem = async () => {
    setLoading(true);
    const res = await getDataItemPage({ ...query, ...pager }).finally(() => {
      setLoading(false);
    });
    tableData.value = res.data || [];
    total.value = res.total || 0;
  };

  const search = () => {
    pager.pageNum = 1;
    queryDataItem();
  };

  const handleAdd = () => {
    currentRecord.value = undefined;
    formVisible.value = true;
  };
  const handleEdit = (record: MyDataItem) => {
    currentRecord.value = record;
    formVisible.value = true;
  };
  const handleDelete = async (done: ClosedFunc, record: MyDataItem) => {
    await removeDateItem(record.id).catch((e) => {
      done(false);
      throw new Error(e);
    });
    done(true);
    queryDataItem();
  };

  queryDataItem();
</script>

<template>
  <div class="my-data-item px-24px py-26px">
    <div class="flex items-center">
      <span class="text-16px lh-32px fw-600 mr-auto">我的数据项</span>
      <a-button type="primary" @click="handleAdd">
        <template #icon>
          <icon-plus />
        </template>
        新增数据项
      </a-button>
    </div>

    <a-input
      v-model="query.name"
      placeholder="请输入数据项名称搜索"
      class="w-300px mt-26px mb-16px"
      allow-clear
      @press-enter="search"
      @clear="search"
    >
      <template #suffix>
        <icon-search />
      </template>
    </a-input>

    <div class="bg-white p-24px border-rd-4px">
      <a-table
        :data="tableData"
        :loading="loading"
        :columns="columns"
        :pagination="false"
        :bordered="false"
        :scroll="{ y: 'calc(100vh - 318px)' }"
      >
        <template #remark="{ record }">
          <span class="color-#86909C">{{ record.remark }}</span>
        </template>

        <template #operation="{ record }">
          <TextButton text="编辑" class="mr-16px" @click="handleEdit(record)" />
          <a-popconfirm
            content="确定要删除吗？"
            type="warning"
            :on-before-ok="(done) => handleDelete(done, record)"
          >
            <TextButton text="删除" />
          </a-popconfirm>
        </template>
      </a-table>

      <div class="flex justify-end mt-20px">
        <a-pagination
          v-model:current="pager.pageNum"
          v-model:page-size="pager.pageSize"
          :total="total"
          show-jumper
          show-page-size
          @change="queryDataItem"
          @page-size-change="queryDataItem"
        />
      </div>
    </div>

    <DataItemForm
      v-model="formVisible"
      :record="currentRecord"
      @finish="queryDataItem"
    />
  </div>
</template>
