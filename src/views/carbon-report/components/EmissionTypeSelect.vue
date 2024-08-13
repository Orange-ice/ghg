<script setup lang="ts"></script>

<template>
  <a-dropdown>
    <div class="flex items-center justify-between cursor-pointer">
      <div class="text-12px lh-20px px-8px bg-#FEE7CD border-rd-13px"
        >排放
      </div>
      <icon-down class="color-#4E5969" />
    </div>
    <template #content>
      <a-doption class="item selected color-1">吸收</a-doption>
      <a-doption class="item color-2">排放</a-doption>
      <a-doption class="item color-3">不涉及</a-doption>
    </template>
  </a-dropdown>
</template>

<style lang="less" scoped>
  .item {
    width: 120px;

    &.selected {
      background: #f2f3f5;
    }
  }

  :deep(.arco-dropdown-list .arco-dropdown-option) {
    padding: 8px 16px;
    background: #000;
  }

  :deep(.arco-dropdown-option-content) {
    line-height: 20px;
    font-size: 12px;
    padding: 0 8px;
    border-radius: 13px;
    background: #fee7cd;
    display: block;
    margin: 8px 0;
  }

  .color-1 {
    :deep(.arco-dropdown-option-content) {
      background: #fee7cd;
    }
  }

  .color-2 {
    :deep(.arco-dropdown-option-content) {
      background: #c4f2d8;
      color: #4e5969;
    }
  }

  .color-3 {
    :deep(.arco-dropdown-option-content) {
      background: #e5e6eb;
      color: #4e5969;
    }
  }
</style>
