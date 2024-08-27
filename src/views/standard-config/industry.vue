<script setup lang="ts">
  /**
   * @description Page 行业选择
   * */
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import ListBlock from '@/views/standard-config/components/ListBlock.vue';
  import { useStandardStore } from '@/store';
  import { getIndustryList } from '@/api/standard-config';
  import { ref } from 'vue';
  import { Standard } from '@/api/standard-config/types';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const standardStore = useStandardStore();

  const list = ref<Standard[]>([]);
  const industryList = ref<
    { name: string; id: string; industryImg?: string }[]
  >([]);
  const queryIndustry = async () => {
    if (!standardStore.diyStandard) return;
    const res = await getIndustryList({
      diyStandard: standardStore.diyStandard,
      diySubcategory: standardStore.diySubcategory,
      diyArea: standardStore.diyArea
    });
    list.value = res.data || [];
    if (list.value.length) {
      industryList.value = list.value.map((item) => ({
        id: item.industryId,
        name: item.industryStr,
        industryImg: item.industryImg
      }));
    }
  };

  const confirm = (val: { name: string; id: string }) => {
    const current = list.value.find((item) => item.industryId === val.id);
    if (!current) return;
    const { industryId, industryStr, id, cycleType } = current;
    standardStore.setInfo({
      industryId,
      industryStr,
      sourceId: id,
      cycleType
    });
    router.push({ name: 'standardCycle' });
  };

  queryIndustry();
</script>

<template>
  <BaseLayout title="请选择您的行业/指南" back-route="standardArea">
    <ListBlock type="industry" :list="industryList" @click-item="confirm" />
  </BaseLayout>
</template>
