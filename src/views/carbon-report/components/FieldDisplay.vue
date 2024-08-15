<script lang="ts" setup>
  import { FieldValue } from '@/api/carbon-report/types';

  defineProps<{
    field: FieldValue;
  }>();
</script>

<template>
  <div>{{ field.name }}</div>
</template>
