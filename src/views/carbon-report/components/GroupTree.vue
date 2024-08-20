<script setup lang="ts">
  import { useCDataStore } from '@/store';

  const cdataStore = useCDataStore();
</script>

<template>
  <!--        <div class="group">-->
  <!--          <iconpark-icon name="list-item" class="symbol" />-->
  <!--          <span>范围一：燃料燃烧</span>-->
  <!--          <iconpark-icon name="copy" class="copy" />-->
  <!--        </div>-->
  <!--        <div class="group">-->
  <!--          <iconpark-icon name="list-item" class="symbol" />-->
  <!--          <span>范围一：燃料燃烧</span>-->
  <!--          <iconpark-icon name="copy" class="copy" />-->
  <!--        </div>-->
  <!--        <div class="group">-->
  <!--          <iconpark-icon name="list-item" class="symbol" />-->
  <!--          <span>范围一：燃料燃烧</span>-->
  <!--          <iconpark-icon name="copy" class="copy" />-->
  <!--        </div>-->
  <div class="group-tree">
    <a-tree
      :data="cdataStore.groupTree"
      :field-names="{ title: 'name', key: 'id' }"
    >
      <template #icon>
        <iconpark-icon name="list-item" />
      </template>
    </a-tree>
  </div>
</template>

<style lang="less" scoped>
  .group-tree {
    border: solid 1px red;
  }
</style>
