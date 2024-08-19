<script setup lang="ts">
  /**
   * @description 因子计算弹框 Component
   * */

  const modelValue = defineModel<boolean>();
</script>

<template>
  <a-drawer
    v-model:visible="modelValue"
    title="xxx因子计算"
    :footer="false"
    :width="1072"
    :mask-closable="false"
    unmount-on-close
  >
    <div class="bg-#EBF1FF py-7px px-16px flex items-center">
      <iconpark-icon name="attention" class="color-#1A58F4 text-12px" />
      <span class="text-12px lh-22px ml-6px"
        >请先填入对应数值，点击下方计算按钮计算结果后选择所需因子值（可多选），提交对应选择因子至碳数据表单。</span
      >
    </div>
    <h3 class="section-title">Step.1 填写计算数值</h3>
    <div class="table-wrapper">
      <a-table></a-table>
    </div>
    <h3 class="section-title">Step.2 计算数值</h3>
    <a-button class="w-100%" type="outline">计算数值</a-button>
    <h3 class="section-title">
      Step.3 选择并提交对应因子至碳数据表单（当前选择 0 条）
    </h3>
    <a-button type="primary" class="w-100%">提交</a-button>
  </a-drawer>
</template>

<style lang="less" scoped>
  .table-wrapper {
    padding-bottom: 24px;
    border-bottom: solid 1px #e6e8eb;
  }

  .section-title {
    font-size: 14px;
    line-height: 20px;
    margin: 24px 0 20px;
  }
</style>
