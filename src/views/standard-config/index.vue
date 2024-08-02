<script setup lang="ts"></script>

<template>
  <div>
    标准配置 - 选择标准 <br />
    <a-button type="primary" @click="$router.push({ name: 'standardArea' })"
      >地区</a-button
    >
    <a-button @click="$router.push({ name: 'standardIndustry' })"
      >行业</a-button
    >
  </div>
</template>
