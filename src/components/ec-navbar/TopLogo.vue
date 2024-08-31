<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/store';
import defaultLogo from '@/assets/images/ec-logo.png';

defineOptions({
  name: 'TopLogo'
});
const defaultUrl = 'https://www.ecdigit.com';
const userStore = useUserStore();
const logoImg = computed(() => {
  return (
    userStore.workBenchUserInfo.indexLogoUrl || defaultLogo
  );
});
const logoUrl = computed(() => {
  return (
    userStore.workBenchUserInfo.indexSkipUrl || defaultUrl
  );
});
const toWeb = () => {
  window.open(logoUrl.value, '_blank');
};
</script>


<template>
  <div class="top-logo" @click="toWeb">
    <img :src="logoImg" alt="" />
  </div>
</template>

<style lang="less" scoped>
.top-logo {
  margin-left: 20px;
  cursor: pointer;

  img {
    width: auto;
    height: 30px;
    display: block;
  }
}
</style>
