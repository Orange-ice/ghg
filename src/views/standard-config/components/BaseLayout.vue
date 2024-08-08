<script setup lang="ts">
  /**
   * @description @Component 选择地区/行业/周期的页面相似，公用布局组件
   * */

  defineProps<{
    backRoute: string;
    title: string;
  }>();
</script>

<template>
  <div class="base-layout">
    <div class="header">
      <iconpark-icon
        name="back"
        class="icon"
        @click="$router.push({ name: backRoute })"
      />
      <span>{{ title }}</span>
    </div>

    <div class="content">
      <div class="title">
        <iconpark-icon name="guide" class="icon" />
        <span>核算标准</span>
        <span class="name">中国碳核算标准或指南</span>
        <span class="type">地方碳核算指南</span>
        <!--        <a-select-->
        <!--          style="margin-left: auto; width: 128px"-->
        <!--          size="small"-->
        <!--        ></a-select>-->
      </div>
      <p class="desc">
        中国碳核算标准或指南行业标准指南用于测量、报告和管理组织温室气体排放的国际性标准
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .base-layout {
    margin: 26px 24px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 26px;

    .icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      margin-right: 4px;
      cursor: pointer;
    }

    > span {
      font-size: 24px;
      color: var(--text-1);
      line-height: 32px;
      text-align: justify;
      font-style: normal;
    }
  }

  .content {
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;

    .title {
      display: flex;
      align-items: center;

      .icon {
        width: 20px;
        height: 20px;
        font-size: 20px;
        margin-right: 4px;
      }

      > span:nth-child(2) {
        font-weight: bold;
        font-size: 20px;
        color: #1d2129;
        line-height: 28px;
      }

      .name {
        font-weight: 600;
        font-size: 20px;
        color: #008f50;
        line-height: 28px;
      }

      .type {
        margin-left: 8px;
        padding: 0 6px;
        font-size: 14px;
        color: #008f50;
        line-height: 20px;
        background: #e8fff1;
      }
    }

    .desc {
      margin: 8px 0 32px;
      font-size: 12px;
      color: #4e5969;
      line-height: 16px;
    }
  }
</style>
