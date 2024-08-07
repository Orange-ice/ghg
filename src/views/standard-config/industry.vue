<script setup lang="ts">
  /**
   * @description Page 行业选择
   * */
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import ListBlock from '@/views/standard-config/components/ListBlock.vue';
</script>

<template>
  <BaseLayout title="请选择您的行业/指南" back-route="standardArea">
    <ListBlock @click-item="$router.push({ name: 'standardCycle' })" />
  </BaseLayout>
</template>
