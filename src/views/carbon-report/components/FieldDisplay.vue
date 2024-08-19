<script lang="ts" setup>
  import { FieldValue } from '@/api/carbon-report/types';
  import { useDictStore } from '@/store';
  import EmissionTypeSelect from '@/views/carbon-report/components/EmissionTypeSelect.vue';
  import { computed } from 'vue';
  import FactorInput from '@/views/carbon-report/components/FactorInput.vue';

  const props = defineProps<{
    field: FieldValue;
  }>();

  const dictStore = useDictStore();
  const FIELD_CODE = {
    factor: 'FIELD_FACTOR',
    input: 'FIELD_INPUT',
    calc: 'FIELD_CALCULATE_FORMULA',
  };
  const fieldCode = computed(
    () => dictStore.dictionaryMap[props.field.dictFieldType]?.code
  );
</script>

<template>
  <!--  排放类型  -->
  <EmissionTypeSelect v-if="!field.dictFieldType" />
  <template v-else-if="dictStore.dictionaryMap[field.dictFieldType]">
    <!--  输入框  -->
    <a-input v-if="fieldCode === FIELD_CODE.input" placeholder="请输入" />
    <!--  因子  -->
    <FactorInput v-else-if="fieldCode === FIELD_CODE.factor" />
    <!-- 因子公式   -->
    <div v-else>计算</div>
  </template>
  <!-- 数据项 -->
  <template v-else>{{ field.name }}</template>
</template>

<style lang="less" scoped></style>
