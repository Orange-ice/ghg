<template>
  <a-tooltip position="br" :content="$t('navbar.name.note')" mini
  >
    <a-button class="nav-btn" @click="handClickItem('/workbench/note/manage')">
      <iconpark-icon name="caozuorizhi"></iconpark-icon>
    </a-button
    >
  </a-tooltip>
</template>

<script setup lang="ts">

defineOptions({
  name: 'NoteBtn'
});

const handClickItem = (url: string) => {
  window.location.href = url;
};

</script>
