<script lang="ts" setup>
  import BaseLayout from '@/views/standard-config/components/BaseLayout.vue';
  import FinallyConfirm from '@/views/standard-config/components/FinallyConfirm.vue';
  import { ref } from 'vue';

  const confirmVisible = ref(false);
</script>

<template>
  <BaseLayout title="请选择填报周期" back-route="standardIndustry">
    <span class="title-text">所选行业</span>
    <div class="industry">
      <span>采矿业（上海）</span>
      <span>重新选择</span>
    </div>

    <div class="cycle">
      <span class="title-text">填报周期</span>
      <div class="cycle-wrapper">
        <div class="cycle-item">
          <span>年度填报</span>
          <p>以年度为单位进行碳数据填报</p>
        </div>
        <div class="cycle-item">
          <span>年度填报</span>
          <p>以年度为单位进行碳数据填报</p>
        </div>
        <div class="cycle-item">
          <span>年度填报</span>
          <p>以年度为单位进行碳数据填报</p>
        </div>
      </div>
    </div>

    <div class="tip">
      <iconpark-icon name="attention" class="icon" />
      <span>
        您当前选择的是「XX填报」，请再次确认是否选用此填报周期，一旦选择则无法修改。
      </span>
    </div>

    <div class="operation">
      <a-button style="margin-right: 12px" type="outline">返回重选</a-button>
      <a-button type="primary" @click="confirmVisible = true">
        开始使用
      </a-button>
    </div>
  </BaseLayout>

  <FinallyConfirm v-model="confirmVisible" />
</template>

<style lang="less" scoped>
  .title-text {
    font-size: 14px;
    color: var(--text-1);
    line-height: 24px;
    font-weight: bold;
  }

  .industry {
    margin: 16px 0 32px;
    padding: 16px;
    background: #f7f8fa;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span:first-child {
      font-weight: 600;
      font-size: 16px;
      color: var(--text-1);
      line-height: 24px;
    }

    > span:last-child {
      font-size: 14px;
      color: #008f50;
      line-height: 24px;
      cursor: pointer;
    }
  }

  .cycle {
    padding-top: 32px;
    border-top: solid 1px #f2f3f5;

    .cycle-wrapper {
      margin: 16px 0 24px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 18px;

      .cycle-item {
        cursor: pointer;
        border: solid 1px #a3a3a3;
        transition: 0.3s;
        border-radius: 4px;
        padding: 16px 14px;

        > span:first-child {
          font-size: 16px;
          color: var(--text-1);
          line-height: 24px;
          font-weight: 600;
        }

        > p {
          margin-top: 4px;
          font-size: 14px;
          color: #86909c;
          line-height: 24px;
        }

        &:hover {
          border-color: #008f50;
        }
      }
    }
  }

  .tip {
    padding: 7px 16px;
    background: #ebf1ff;
    display: flex;
    align-items: center;

    > .icon {
      font-size: 12px;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      color: #1a58f4;
    }

    > span {
      font-size: 12px;
      color: var(--text-1);
      line-height: 22px;
    }
  }

  .operation {
    margin-top: 24px;
    text-align: center;
  }
</style>
