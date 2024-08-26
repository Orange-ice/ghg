<script setup lang="ts">
  /**
   * @description Page 行业选择
   * */
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import ListBlock from '@/views/standard-config/components/ListBlock.vue';
  import { useStandardStore } from '@/store';
  import { getIndustryList } from '@/api/standard-config';

  const standardStore = useStandardStore();

  const queryIndustry = async () => {
    if (!standardStore.diyStandard) return;
    const res = await getIndustryList({
      diyStandard: standardStore.diyStandard,
      diySubcategory: standardStore.diySubcategory,
      diyArea: standardStore.diyArea
    });
  };

  queryIndustry();
</script>

<template>
  <BaseLayout title="请选择您的行业/指南" back-route="standardArea">
    <ListBlock
      type="industry"
      :list="[]"
      @click-item="$router.push({ name: 'standardCycle' })"
    />
  </BaseLayout>
</template>
