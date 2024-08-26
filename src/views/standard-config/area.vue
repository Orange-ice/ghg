<script setup lang="ts">
  /**
   * @description Page 地区选择页面
   * */
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import ListBlock from '@/views/standard-config/components/ListBlock.vue';
  import { useRouter } from 'vue-router';
  import { useDictStore, useStandardStore } from '@/store';
  import { getAreaList } from '@/api/standard-config';
  import { ref } from 'vue';
  import { AreaItem } from '@/api/standard-config/types';

  const router = useRouter();
  const standardStore = useStandardStore();
  const dictStore = useDictStore();
  const areaList = ref<AreaItem[]>([]);

  const queryArea = async () => {
    if (!(standardStore.diyStandard && standardStore.diySubcategory)) {
      return;
    }
    const res = await getAreaList({
      diyStandard: standardStore.diyStandard,
      diySubcategory: standardStore.diySubcategory
    });
    areaList.value = res.data || [];
    if (areaList.value.length) {
      areaList.value.forEach((item) => {
        item.name = dictStore.dictionaryMap[item.diyArea]?.name;
        item.id = item.diyArea;
      });
    }
  };

  const confirm = () => {
    router.push({ name: 'standardIndustry' });
  };

  queryArea();
</script>

<template>
  <div class="area">
    <BaseLayout back-route="standardConfig" title="请选择您所在的地区">
      <ListBlock :list="areaList" type="area" @click-item="confirm" />
    </BaseLayout>
  </div>
</template>

<style lang="less" scoped>
  .area {
    //margin: 26px 24px;
  }
</style>
