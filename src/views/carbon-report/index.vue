<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useCDataStore } from '@/store';
  import TreeNode from '@/views/carbon-report/components/TreeNode.vue';
  import GroupTree from '@/views/carbon-report/components/GroupTree.vue';
  import TotalFooter from '@/views/carbon-report/components/TotalFooter.vue';

  const cdataStore = useCDataStore();

  onMounted(() => {
    cdataStore.queryGroupTree('1823257653503815680');
    cdataStore.queryDetail('1823257653503815680');
  });
</script>

<template>
  <div class="carbon-report">
    <div class="header">
      <icon-left
        class="text-16px mr-12px cursor-pointer"
        @click="$router.back"
      />
      <span class="text-16px lh-40px">2024年7月企业碳排放数据</span>
      <div class="color-white text-12px lh-24px px-6px bg-#008F50 mx-6px">
        中国碳核算标准或指南
      </div>
      <div class="text-12px lh-24px color-#00368F px-6px bg-#E8ECFF">
        黑色金属延压业
      </div>
      <!--      <a-button size="small" type="outline" class="ml-auto mr-12px">-->
      <!--        下载模板-->
      <!--      </a-button>-->
      <!--      <a-button size="small" type="outline">导入模板</a-button>-->
    </div>

    <div class="title">
      <h3 class="lh-32px">数据概览</h3>

      <div class="boundary ml-138px selected">
        <div class="icon-wrapper">
          <iconpark-icon name="hourglass" class="icon" />
        </div>
        <span class="lh-32px">企业层级核算边界</span>
      </div>
      <div class="boundary ml-40px">
        <div class="icon-wrapper">
          <iconpark-icon name="hourglass" class="icon" />
        </div>
        <span class="lh-32px">工序层级核算边界</span>
      </div>
    </div>

    <div class="content">
      <div class="aside">
        <GroupTree />
      </div>
      <div class="main">
        <TreeNode />
      </div>
    </div>

    <TotalFooter />
  </div>
</template>

<style lang="less" scoped>
  .carbon-report {
    > .header {
      background: var(--color-white);
      border-bottom: solid 1px #e6e8eb;
      display: flex;
      align-items: center;
      height: 48px;
      color: #1d2129;
      padding: 0 24px;
    }

    > .title {
      display: flex;
      align-items: center;
      color: #1d2129;
      font-weight: 600;
      font-size: 20px;
      margin: 26px 24px;

      .boundary {
        display: flex;
        align-items: center;
        color: #4e5969;
        cursor: pointer;

        > .icon-wrapper {
          background: #e5e6eb;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-right: 10px;

          .icon {
            margin-top: 2px;
            font-size: 14px;
          }
        }
      }

      .boundary.selected {
        color: #1d2129;

        > .icon-wrapper {
          background: #008f50;

          .icon {
            color: var(--color-white);
          }
        }
      }
    }

    > .content {
      display: flex;
      margin: 0 24px 26px;

      .aside {
        width: 192px;
        margin-right: 24px;
      }

      .main {
        flex: 1;
        background: var(--color-white);
        padding: 26px 24px;
        height: calc(100vh - 218px - 64px);
        overflow: auto;
      }
    }
  }
</style>
