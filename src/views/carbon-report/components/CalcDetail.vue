<script setup lang="ts">
  import ScopeChart from '@/views/carbon-report/components/ScopeChart.vue';
  import DetailChart from '@/views/carbon-report/components/DetailChart.vue';

  /**
   * @description 核算的详情预览
   * */
  const visible = defineModel<boolean>();
</script>

<template>
  <a-drawer v-model:visible="visible" :width="960">
    <template #title>
      <div class="flex items-center">
        <span class="text-16px lh-40px">2024年7月企业碳排放数据</span>
        <div class="color-white text-12px lh-24px px-6px bg-#008F50 mx-6px">
          中国碳核算标准或指南
        </div>
        <div class="text-12px lh-24px color-#00368F px-6px bg-#E8ECFF">
          黑色金属延压业
        </div>
      </div>
    </template>
    <div class="calc-detail">
      <div class="py-20px px-16px border-rd-2px bg-#E8FFF1 my-12px">
        <h3 class="text-18px lh-18px mb-6px">碳排放量</h3>
        <div class="text-12px lh-20px color-#86909C">
          企业层级核算边界碳排放量
        </div>
        <div class="flex items-end py-12px mt-12px">
          <div class="text-40px lh-40px">98,0200</div>
          <div class="text-14px lg-24px">/tCO₂e</div>
        </div>
      </div>

      <div class="card-wrapper">
        <div class="card">
          <div>
            <div class="card-title">能源消耗量</div>
            <div class="card-desc"> 企业层级核算边界能源消耗量</div>
          </div>
          <div class="flex items-end">
            <div class="card-num">623,214.83</div>
            <div class="card-unit">GJ</div>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="card-title">能源消耗量</div>
            <div class="card-desc"> 企业层级核算边界能源消耗量</div>
          </div>
          <div class="flex items-end">
            <div class="card-num">623,214.83</div>
            <div class="card-unit">GJ</div>
          </div>
        </div>
      </div>
      <h2 class="section-title">碳排放强度</h2>
      <div
        class="flex py-18px px-16px bg-#F7F8FA border-y-solid border-y-1px border-y-#E6E8EB"
      >
        <div class="text-14px lh-20px">碳排放强度汇总（单位产量）</div>
        <div class="text-14px lh-20px color-#86909C">t/CO₂t</div>
        <div class="text-14px lh-20px ml-auto">6.04</div>
      </div>
      <h2 class="section-title">范围碳排放量</h2>
      <div class="flex">
        <div class="scope">
          <div class="scope-item title">
            <div>排放范围</div>
            <div>碳排放量 tCO₂eq</div>
          </div>
          <div class="scope-item child">
            <div>范围一</div>
            <div>123,456.78</div>
          </div>
          <div class="scope-item child">
            <div>范围二</div>
            <div>123,456.78</div>
          </div>
          <div class="scope-item child">
            <div>范围三</div>
            <div>123,456.78</div>
          </div>
        </div>
        <div class="w-200px ml-64px mr-42px">
          <ScopeChart />
        </div>
      </div>
      <h2 class="section-title">碳排放量明细</h2>
      <DetailChart />
    </div>
  </a-drawer>
</template>

<style lang="less" scoped>
  .calc-detail {
    > .card-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 12px;
      margin-bottom: 28px;

      > .card {
        padding: 20px 16px;
        background: #f7f8fa;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .card-title {
          font-size: 16px;
          line-height: 18px;
        }

        .card-desc {
          font-size: 12px;
          line-height: 20px;
          color: #86909c;
          margin-top: 6px;
        }

        .card-num {
          font-size: 24px;
          line-height: 32px;
        }

        .card-unit {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }

    .section-title {
      font-size: 16px;
      line-height: 22px;
      border-top: solid 1px #f2f3f5;
      padding-top: 28px;
      margin-top: 28px;
      margin-bottom: 24px;
    }

    .scope {
      flex-grow: 1;

      &-item {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 20px;

        &.title {
          background: #f7f8fa;
          padding: 18px 16px;
          border-top: solid 1px #e6e8eb;
          border-bottom: solid 1px #e6e8eb;
        }

        &.child {
          padding: 14px 16px;
          border-bottom: solid 1px #e6e8eb;
          position: relative;
          margin-left: 14px;

          &::before {
            content: ' ';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #44bc80;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
