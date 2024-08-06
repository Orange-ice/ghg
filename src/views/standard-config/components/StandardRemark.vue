<script setup lang="ts">
  /**
   * @description Component 协助选择标准弹框
   * */

  const modelValue = defineModel<boolean>();
</script>

<template>
  <a-modal
    v-model:visible="modelValue"
    title="协助选择标准"
    render-to-body
    :footer="false"
    title-align="start"
  >
    <div class="remark">
      <h3>企业价值链（范围3）核算和报告准则</h3>
      <p>
        企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本
        企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本企业价值链（范围3）核算和报告准则的区别内容及标准说明文案示例文本
      </p>
      <div class="footer">
        <span>还不明确如何进行标准选择？</span>
        <div class="ai">
          <span>咨询 易碳_组织碳 专家</span>
          <iconpark-icon name="ai-enter" class="icon" />
        </div>
      </div>
    </div>
  </a-modal>
</template>

<style lang="less" scoped>
  .remark {
    > h3 {
      font-weight: 600;
      font-size: 16px;
      color: var(--text-1);
      line-height: 22px;
      margin-bottom: 11px;
    }

    > p {
      font-weight: 300;
      font-size: 14px;
      color: var(--text-1);
      line-height: 24px;
      height: 435px;
    }

    .footer {
      margin: 20px -20px -16px;
      border-radius: 0 0 8px 8px;
      padding: 12px 0;
      background: #f2f3f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;

      > span {
        font-weight: 400;
        color: var(--text-1);
        line-height: 16px;
      }

      .ai {
        margin-top: 4px;
        display: flex;
        align-items: center;

        > span {
          color: rgba(0, 143, 80, 0.3);
          font-weight: 400;
          line-height: 16px;
        }

        .icon {
          width: 8px;
          height: 8px;
          font-size: 8px;
          margin-left: 8px;
        }
      }
    }
  }
</style>
