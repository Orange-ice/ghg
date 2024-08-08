<script setup lang="ts"></script>

<template>
  <div class="standard-display px-24px py-26px">
    <div class="flex justify-between">
      <h3 class="text-#1D2129 text-16px lh-32px fw-600">标准管理</h3>
      <a-button
        type="primary"
        @click="$router.push({ name: 'standardConfig' })"
      >
        <template #icon>
          <icon-plus />
        </template>
        新增标准
      </a-button>
    </div>

    <p class="flex items-center mt-26px mb-20px px-16px py-7px bg-#EBF1FF">
      <iconpark-icon
        name="attention"
        class="text-12px w-12px h-12px color-#1A58F4"
      />
      <span class="text-12px lh-22px text-#1D2129 mx-4px">
        当前账号还可新增 0 个标准，如需新增更多标准请
      </span>
      <span class="text-12px lh-22px text-#1A58F4"> 咨询客服 </span>
    </p>

    <div class="standard flex bg-#fff p-24px border-rd-4px items-center">
      <div class="mr-auto">
        <div class="flex items-center">
          <iconpark-icon name="guide" class="text-20px mr-12px w-20px h-20px" />
          <span class="text-16px lh-20px color-#1D2129 fw-600 mr-4px">
            核算标准
          </span>
          <span class="text-16px lh-20px color-#008F50 fw-600 mr-8px">
            中国碳核算标准或指南
          </span>
          <span class="text-12px lh-20px px-6px inline-block bg-#F2F3F5">
            地方碳核算指南
          </span>
        </div>
        <p class="text-12px lh-16px color-#4E5969 mt-10px">
          行业标准指南用于测量、报告和管理组织温室气体排放的国际性标准
        </p>
      </div>

      <div class="info">
        <span>上海</span>
        <span>所在地区</span>
      </div>
      <div class="info">
        <span>水泥制造业</span>
        <span>所选行业</span>
      </div>
      <div class="info">
        <span>年度填报</span>
        <span>填报周期</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .standard {
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 40px;

      > span:first-child {
        font-size: 16px;
        color: #1d2129;
        line-height: 20px;
        font-weight: 600;
      }

      > span:last-child {
        margin-top: 10px;
        font-size: 12px;
        color: #4e5969;
        line-height: 16px;
      }
    }
  }
</style>
