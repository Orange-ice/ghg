<template>
  <a-button class="home-btn" @click="toHome()">
    <iconpark-icon name="homebtn" size="16" style="margin-right: 6px;"></iconpark-icon>
    工作台
  </a-button>
</template>

<script setup lang="ts">

defineOptions({
  name: 'HomeBtn'
});
// withDefaults(defineProps<{ text?: string; icon?: string }>(), {
//   text: 'navbar.workbench',
//   icon: 'homebtn'
// });
const toHome = () => {
  window.location.href = '/workbench/home';
};
</script>

<style lang="less" scoped>
.home-btn {
  height: 30px;
  padding: 0 10px;
  font-size: 12px;
  margin-left: 16px;
  border: 0 none;
  border-radius: 0;
  color: #4e5969;
}
</style>
