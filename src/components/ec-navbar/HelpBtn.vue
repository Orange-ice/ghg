<template>
  <a-tooltip position="br" :content="$t('navbar.helpcenter')" mini
  >
    <a-button
      class="nav-btn"
      @click="go"
    >
      <iconpark-icon name="bangzhuwendang"></iconpark-icon>
    </a-button
    >
  </a-tooltip>
</template>

<script setup lang="ts">

defineOptions({
  name: 'HelpBtn'
});
const go = () => {
  window.location.href = '/workbench/helpCenter/home';
};
</script>
