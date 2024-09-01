<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <EcNavbar />
    </div>
    <a-layout-content class="layout-main-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
  import EcNavbar from '@/components/ec-navbar/index.vue';

  defineOptions({
    name: 'MainLayout',
  });
</script>

<style scoped lang="less">
  @nav-size-height: 60px;

  .layout {
    width: 100%;
    height: 100vh;
  }

  .layout-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: @nav-size-height;
  }

  .layout-main-content {
    height: 100vh;
    overflow-y: auto;
    background-color: var(--color-fill-2);
    padding-top: @nav-size-height;
  }
</style>
