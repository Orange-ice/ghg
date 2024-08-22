<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { FactorHead, FactorVal, FieldValue } from '@/api/carbon-report/types';
  import { getFactorHead, getFactors } from '@/api/carbon-report';
  import useLoading from '@/hooks/loading';

  const props = defineProps<{
    field: FieldValue;
  }>();
  const visible = ref(false);
  const handleSwitch = () => {
    visible.value = true;
  };
  const { loading, setLoading } = useLoading(false);
  const total = ref(0);
  const pager = reactive({
    pageNum: 1,
    pageSize: 10
  });
  const query = reactive({
    dataName: '',
    industry: ''
  });
  const factors = ref<FactorVal[]>([]);
  const heads = ref<FactorHead[]>([]);
  const queryFactors = async () => {
    setLoading(true);
    const res = await getFactors({
      ...pager,
      ...query,
      tabId: props.field.factorTab || ''
    }).finally(() => {
      setLoading(false);
    });
    factors.value = res.data || [];
    total.value = res.total || 0;
  };
  const queryFactorHead = async () => {
    const headRes = await getFactorHead(props.field.factorTab || '');
    heads.value = headRes.data || [];
  };
  const onOpen = () => {
    queryFactorHead();
    queryFactors();
  };
  const onClose = () => {
    Object.assign(query, {
      dataName: '',
      industry: ''
    });
    Object.assign(pager, {
      pageNum: 1,
      pageSize: 10
    });
    total.value = 0;
    heads.value = [];
    factors.value = [];
  };

  const displayVal = (headId: string, factor: FactorVal) => {
    return factor.values.find((val) => val.headerId === headId)?.val;
  };
</script>

<template>
  <div class="factor-input">
    <iconpark-icon name="quesheng" class="icon" />
    <a-input placeholder="请输入" class="input" :model-value="field.inputVal" />
    <iconpark-icon name="switch" class="switch" @click="handleSwitch" />

    <a-drawer
      v-model:visible="visible"
      title="选择因子数据"
      :width="960"
      :footer="false"
      unmount-on-close
      @open="onOpen"
      @close="onClose"
    >
      <div class="mb-24px">
        <a-input
          placeholder="请输入因子名称搜索"
          class="w-300px mr-12px"
        ></a-input>
        <a-select placeholder="请选择行业" class="w-160px"></a-select>
      </div>
      <a-table :data="factors" :pagination="false" :loading="loading">
        <template #columns>
          <a-table-column
            v-for="head in heads"
            :key="head.id"
            :data-index="head.id"
          >
            <template #title>
              <span>{{ head.name }}</span>
            </template>

            <template #cell="{ record }">
              {{ displayVal(head.id, record) }}
            </template>
          </a-table-column>

          <a-table-column title="操作">
            <template #cell>
              <span class="text-12px color-#008F50 cursor-pointer">选用</span>
            </template>
          </a-table-column>
        </template>
      </a-table>
      <a-pagination
        v-model:current="pager.pageNum"
        v-model:page-size="pager.pageSize"
        :total="total"
        show-jumper
        show-page-size
        class="mt-20px"
        @page-size-change="queryFactors"
        @change="queryFactors"
      >
      </a-pagination>
    </a-drawer>
  </div>
</template>

<style lang="less" scoped>
  .factor-input {
    display: flex;
    align-items: center;
    position: relative;

    > .icon {
      font-size: 10px;
      width: 10px;
      height: 10px;
    }

    > .input {
      width: 110px;
      margin: 0 4px;
    }

    > .switch {
      font-size: 24px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      display: none;
      position: absolute;
      right: 0;
    }

    &:hover {
      > .switch {
        display: inline-block;
      }
    }
  }
</style>
