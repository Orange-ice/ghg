<script lang="ts" setup>
  import { FieldValue } from '@/api/carbon-report/types';
  import { useDictStore } from '@/store';

  defineProps<{
    field: FieldValue;
  }>();

  const dictStore = useDictStore();
</script>

<template>
  <div>{{ field.name }}{{ dictStore.FORMULA_FIELD_CATEGORY }}</div>
</template>
