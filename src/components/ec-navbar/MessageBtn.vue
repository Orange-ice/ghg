<template>
  <a-popover position="br" trigger="click" :content-style="{ padding: '20px' }">
    <a-tooltip position="br" :content="$t('navbar.messageCenter')" mini>
      <a-badge :count="unreadCount" dot>
        <a-button class="nav-btn" style="margin-right: 0">
          <iconpark-icon name="xiaoxitongzhi"></iconpark-icon>
        </a-button>
      </a-badge>
    </a-tooltip>
    <template #content>
      <MessageBox />
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/store';
import MessageBox from './MessageBox.vue';

defineOptions({
  name: 'MessageBtn'
});
const userStore = useUserStore();
const unreadCount = computed(() => {
  return userStore.unreadCount || 0;
});
</script>

<style lang="less" scoped>
:deep(.arco-badge-dot) {
  top: 6px;
  right: 0;
}
</style>
