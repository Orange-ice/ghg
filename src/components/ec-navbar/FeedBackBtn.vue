<script setup lang="ts">
import { ref } from 'vue';
// import FeedBack from '@/components/navbar/components/FeedBack.vue';

defineOptions({
  name: 'FeedBackBtn'
});
const visible = ref(false);
</script>

<template>
  <div class="feedback-btn" @click.stop="visible = true">
    <iconpark-icon name="yijian" size="26"></iconpark-icon
    >
    <span>{{ $t('navbar.feedback') }}<b>{{ $t('navbar.feedbackAdvice') }}</b></span>
<!--    <FeedBack v-model:visible="visible" />-->
  </div>
</template>

<style lang="less" scoped>
.feedback-btn {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  font-size: 14px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(270deg, #f5f6f5 0%, #d0eddd 100%);
  border-radius: 16px;

  span {
    margin-left: 7px;
  }

  b {
    font-weight: 500;
    color: rgb(var(--primary-6));
  }
}
</style>
