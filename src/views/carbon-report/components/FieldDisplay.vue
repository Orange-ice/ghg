<script lang="ts" setup>
  import { FieldValue } from '@/api/carbon-report/types';
  import { useDictStore } from '@/store';
  import EmissionTypeSelect from '@/views/carbon-report/components/EmissionTypeSelect.vue';
  import { computed, ref } from 'vue';
  import FactorInput from '@/views/carbon-report/components/FactorInput.vue';
  import FactorCompute from '@/views/carbon-report/components/FactorCompute.vue';

  const props = defineProps<{
    field: FieldValue;
  }>();

  const dictStore = useDictStore();
  const FIELD_CODE = {
    // 因子
    factor: 'FIELD_FACTOR',
    //  输入框
    input: 'FIELD_INPUT',
    // 计算公式
    calc: 'FIELD_CALCULATE_FORMULA',
    // 因子公式
    factorFormula: 'FIELD_FACTOR_FORMULA'
  };
  const fieldCode = computed(
    () => dictStore.dictionaryMap[props.field.dictFieldType]?.code
  );

  const computeVisible = ref(false);
  const handleCompute = () => {
    computeVisible.value = true;
  };
</script>

<template>
  <!--  排放类型  -->
  <EmissionTypeSelect v-if="!field.dictFieldType" />
  <template v-else-if="dictStore.dictionaryMap[field.dictFieldType]">
    <!--  输入框  -->
    <a-input
      v-if="fieldCode === FIELD_CODE.input"
      placeholder="请输入"
      :model-value="field.inputVal"
    />
    <!--  因子  -->
    <FactorInput v-else-if="fieldCode === FIELD_CODE.factor" :field="field" />
    <!-- 因子公式   -->
    <div v-if="fieldCode === FIELD_CODE.factorFormula" class="compute-wrapper">
      <span class="compute" @click="handleCompute">请计算因子</span>
    </div>
  </template>
  <!-- 数据项 -->
  <template v-else>{{ field.name }}</template>

  <FactorCompute v-model="computeVisible" :field="field" />
</template>

<style lang="less" scoped>
  .compute-wrapper {
    > .compute {
      font-size: 12px;
      color: #44bc80;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
</style>
