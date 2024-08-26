<script setup lang="ts">
  defineProps<{
    text: string;
    disabled?: boolean;
  }>();
</script>

<template>
  <span :class="{ 'text-button': true, 'disabled': disabled }">{{ text }}</span>
</template>

<style lang="less" scoped>
  .text-button {
    //font-size: 12px;
    color: #008f50;
    cursor: pointer;

    &.disabled {
      cursor: no-drop;
      user-select: none;
      //color: rgba(0, 143, 80, 0.3);
      opacity: 0.3;
    }
  }
</style>
