<script setup lang="ts"></script>

<template>
  <div class="total-footer">
    <div class="flex items-end">
      <span class="title strong">碳排放量</span>
      <span class="num-carbon">--</span>
      <span class="unit">/tCO₂e</span>

      <span class="title">能源消耗量</span>
      <span class="num">--</span>
      <span class="unit">GJ</span>

      <span class="title">绿电使用量</span>
      <span class="num">--</span>
      <span class="unit">WMh</span>
    </div>

    <a-button status="success" class="ml-auto mr-12px">详情预览</a-button>
    <a-button type="primary">数据核算</a-button>
  </div>
</template>

<style lang="less" scoped>
  .total-footer {
    border-top: solid 1px #e6e8eb;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    width: 100%;
    height: 64px;
    padding: 16px 24px;
    display: flex;
    align-items: center;

    .title {
      font-size: 13px;
      color: #4e5969;
      line-height: 20px;

      &.strong {
        color: #1d2129;
      }
    }

    .num {
      font-size: 20px;
      color: #1d2129;
      line-height: 24px;
      margin-left: 8px;
      margin-right: 4px;
    }

    .num-carbon {
      font-size: 30px;
      color: #008f50;
      line-height: 30px;
      margin-left: 8px;
      margin-right: 4px;
    }

    .unit {
      font-size: 14px;
      color: #1d2129;
      line-height: 24px;
      margin-right: 24px;
      display: inline-block;
    }
  }
</style>
