<script setup lang="ts"></script>

<template>
  <div class="carbon-dashboard">
    <div class="h-48px bg-white"></div>

    <div class="px-24px py-26px">
      <div class="flex items-center justify-between mb-30px">
        <img src="@/assets/images/logo.png" alt="" class="w-138px" />

        <div class="date-switch">
          <div class="icon-wrapper">
            <icon-left class="text-12px" />
          </div>
          <span>2024</span>
          <div class="icon-wrapper">
            <icon-right class="text-12px" />
          </div>
        </div>
      </div>

      <div class="flex items-center mb-20px">
        <span class="text-#1D2129 fw-600 lh-24px text-16px mr-8px">
          2024年企业碳排放数据
        </span>
        <span
          class="text-#008F50 lh-24px text-12px px-6px bg-#E8FFF1 inline-block mr-auto"
        >
          已上报
        </span>
        <a-button type="outline">
          <template #icon>
            <icon-plus />
          </template>
        </a-button>
        <a-button type="primary">数据填报</a-button>
      </div>

      <a-tabs default-active-key="2">
        <a-tab-pane key="1" title="企业层级核算边界">
          <!--          Content of Tab Panel 1-->
        </a-tab-pane>
        <a-tab-pane key="2" title="工序层级核算边界">
          <!--          Content of Tab Panel 2-->
        </a-tab-pane>
      </a-tabs>
      <div class="emission">
        <h3 class="text-16px lh-32px fw-600 text-#1D2129 mb-28px">
          碳排放数据详情
        </h3>

        <div class="flex">
          <div class="emission-total">
            <h4>企业层级碳排放总量 <span>tCO₂eq/t</span></h4>
            <div class="time">数据更新时间：2024-07-16</div>
            <div class="num">9,542,372.95</div>
          </div>

          <div class="emission-card">
            <h4>能源消耗量 <span>GJ</span></h4>
            <div class="name">企业层级核算边界能源消耗量</div>
            <div class="num">623,214.83</div>
          </div>
          <div class="emission-card">
            <h4>绿电使用量 <span>MWh</span></h4>
            <div class="name">企业层级核算边界绿电使用量</div>
            <div class="num">3,214.83</div>
          </div>
        </div>
      </div>

      <div class="intensity">
        <h3 class="text-16px lh-32px fw-600 text-#1D2129 mb-24px">
          碳排放强度
        </h3>

        <div class="data-detail">
          <div class="total">
            <span>碳排放强度汇总（单位产量）</span>
            <span>t/CO₂t</span>
            <span>7546.35</span>
          </div>
          <div class="total">
            <span>工序碳排放强度（单位产量）</span>
            <span>t/CO₂t</span>
          </div>
          <div class="process">
            <span>A工序/钢卷</span>
            <span>4553.86</span>
          </div>
          <div class="process">
            <span>A工序/钢卷</span>
            <span>4553.86</span>
          </div>
          <div class="process">
            <span>A工序/钢卷</span>
            <span>4553.86</span>
          </div>
          <div class="process">
            <span>A工序/钢卷</span>
            <span>4553.86</span>
          </div>
          <div class="process">
            <span>A工序/钢卷</span>
            <span>4553.86</span>
          </div>
        </div>
      </div>

      <div class="charts">
        <h3 class="text-16px lh-32px fw-600 text-#1D2129 mb-24px">
          碳排放量明细
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .carbon-dashboard {
    .date-switch {
      border: 1px solid #d9d9d9;
      display: flex;
      align-items: center;
      width: 160px;
      height: 32px;
      background: #ffffff;
      border-radius: 2px;

      > .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 100%;
        cursor: pointer;
      }

      > span {
        flex: 1;
        text-align: center;
        padding: 0 28px;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        font-size: 12px;
        color: #1d2129;
        line-height: 32px;
      }
    }

    .emission {
      background: #ffffff;
      padding: 24px;

      .emission-total {
        flex: 1;

        > h4 {
          margin-bottom: 6px;
          font-size: 14px;
          color: #1d2129;
          line-height: 20px;

          > span {
            color: #86909c;
          }
        }

        .time {
          font-size: 12px;
          color: #86909c;
          line-height: 16px;
          margin-bottom: 16px;
        }

        .num {
          font-weight: 500;
          font-size: 48px;
          color: #008f50;
          line-height: 68px;
        }
      }

      .emission-card {
        background: #f7f8fa;
        margin-left: 18px;
        padding: 15px 16px 17px;
        width: 316px;
        border-radius: 4px;

        > h4 {
          margin-bottom: 3px;
          font-size: 14px;
          color: #1d2129;
          line-height: 20px;

          > span {
            color: #86909c;
          }
        }

        .name {
          margin-bottom: 11px;
          font-size: 12px;
          color: #86909c;
          line-height: 20px;
        }

        .num {
          font-weight: 500;
          font-size: 32px;
          color: #1d2129;
          line-height: 40px;
        }
      }
    }

    .intensity {
      margin-top: 16px;
      background: #ffffff;
      padding: 24px;

      .data-detail {
        border: 1px solid #e6e8eb;

        .total {
          padding: 0 16px;
          background: #f7f8fa;
          border-bottom: 1px solid #e6e8eb;
          display: flex;
          align-items: center;

          > span:first-child {
            font-size: 14px;
            color: #1d2129;
            line-height: 56px;
          }

          > span:nth-child(2) {
            font-size: 14px;
            color: #86909c;
            line-height: 56px;
          }

          > span:nth-child(3) {
            font-size: 14px;
            color: #1d2129;
            line-height: 56px;
            margin-left: auto;
          }
        }

        .process {
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          &:not(:last-child) {
            border-bottom: 1px solid #e6e8eb;
          }

          > span:first-child {
            font-size: 12px;
            color: #1d2129;
            line-height: 40px;
            position: relative;
            margin-left: 16px;

            &::before {
              position: absolute;
              content: '';
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #a9e9c5;
              left: -16px;
              top: 50%;
              transform: translateY(-50%);
            }
          }

          > span:last-child {
            font-size: 14px;
            color: #1d2129;
            line-height: 40px;
          }
        }
      }
    }

    .charts {
      background: #ffffff;
      padding: 24px;
      margin-top: 16px;
    }
  }

  :deep(.arco-tabs-nav-type-line .arco-tabs-tab) {
    margin: 0;
    padding: 4px 8px 4px;
  }

  :deep(.arco-tabs-tab .arco-tabs-tab-title) {
    font-weight: 600;
    color: #1d2129;
  }

  :deep(.arco-tabs-tab.arco-tabs-tab-active .arco-tabs-tab-title) {
    color: #008f50;
  }

  :deep(.arco-tabs-nav-tab) {
    border-bottom: #e5e6eb solid 1px;
  }
</style>
