<script setup lang="ts"></script>

<template>
  <div>
    行业
    <a-button @click="$router.back()">返回</a-button>

    <a-button @click="$router.push({ name: 'standardCycle' })"
      >填报周期</a-button
    >
  </div>
</template>
