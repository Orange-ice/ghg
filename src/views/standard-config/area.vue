<script setup lang="ts">
  /**
   * @description Page 地区选择页面
   * */
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import ListBlock from '@/views/standard-config/components/ListBlock.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const confirm = () => {
    router.push({ name: 'standardIndustry' });
  };
</script>

<template>
  <div class="area">
    <BaseLayout back-route="standardConfig" title="请选择您所在的地区">
      <ListBlock @click-item="confirm" />
    </BaseLayout>
  </div>
</template>

<style lang="less" scoped>
  .area {
    margin: 26px 24px;
  }
</style>
