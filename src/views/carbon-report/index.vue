<script setup lang="ts">
  import { ref } from 'vue';
  import { TableColumnData } from '@arco-design/web-vue';
  import EmissionTypeSelect from '@/views/carbon-report/components/EmissionTypeSelect.vue';

  const tableColumns: TableColumnData[] = [
    { title: '数据项名称', dataIndex: 'name' },
    { title: '排放类型', slotName: 'emissionType', width: 120 },
    { title: '消耗量 t', slotName: 'emission' },
    { title: '单位热值含碳量', dataIndex: '' },
    { title: '电力排放因子', dataIndex: '' },
    { title: '碳氧化率', dataIndex: '' },
    { title: '能源消耗量', dataIndex: '' },
    { title: '碳排放量', dataIndex: '' },
    { title: '操作', dataIndex: '' },
  ];
  const data = ref([
    { name: '系统数据项-1' },
    { name: '系统数据项-2' },
    { name: '系统数据项-3', emission: 123 },
    { name: '系统数据项-4', emission: 43.012 },
    { name: '系统数据项-5' },
    { name: '系统数据项-6' },
    { name: '系统数据项-7' },
    { name: '系统数据项-8' },
  ]);
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
      <a-button size="small" type="outline" class="ml-auto mr-12px">
        下载模板
      </a-button>
      <a-button size="small" type="outline">导入模板</a-button>
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
        <div class="group">
          <iconpark-icon name="list-item" class="symbol" />
          <span>范围一：燃料燃烧</span>
          <iconpark-icon name="copy" class="copy" />
        </div>
        <div class="group">
          <iconpark-icon name="list-item" class="symbol" />
          <span>范围一：燃料燃烧</span>
          <iconpark-icon name="copy" class="copy" />
        </div>
        <div class="group">
          <iconpark-icon name="list-item" class="symbol" />
          <span>范围一：燃料燃烧</span>
          <iconpark-icon name="copy" class="copy" />
        </div>
      </div>
      <div class="main">
        <a-collapse :default-active-key="['1', 2]" :bordered="false">
          <a-collapse-item header="范围一：燃料燃烧" key="1">
            <template #extra>
              <a-button type="outline" @click.stop>复制</a-button>
            </template>
            <div class="flex items-center whitespace-nowrap py-12px px-16px">
              <span class="mr-auto text-14px lh-20px">数据表1</span>
              <a-select
                size="small"
                class="w-200px"
                placeholder="请选择"
              ></a-select>
            </div>
            <a-table
              :data="data"
              :columns="tableColumns"
              :pagination="false"
              :bordered="{ cell: true }"
              :hoverable="false"
              class="mb-18px"
            >
              <template #emissionType>
                <EmissionTypeSelect />
              </template>

              <template #emission="{ record }">
                <a-input
                  placeholder="请输入"
                  :default-value="record.emission"
                />
              </template>
            </a-table>
          </a-collapse-item>
          <a-collapse-item
            header="Beijing Toutiao Technology Co., Ltd."
            :key="2"
          >
            <div>Beijing Toutiao Technology Co., Ltd.</div>
            <div>Beijing Toutiao Technology Co., Ltd.</div>
            <div>Beijing Toutiao Technology Co., Ltd.</div>
          </a-collapse-item>
          <a-collapse-item
            header="Beijing Toutiao Technology Co., Ltd."
            key="3"
          >
            <div>Beijing Toutiao Technology Co., Ltd.</div>
            <div>Beijing Toutiao Technology Co., Ltd.</div>
            <div>Beijing Toutiao Technology Co., Ltd.</div>
          </a-collapse-item>
        </a-collapse>
      </div>
    </div>
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

        .group {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-bottom: 12px;
          }

          > span {
            font-size: 12px;
            line-height: 18px;
            flex: 1;
            margin: 0 8px 0 4px;
          }

          .symbol {
            font-size: 14px;
            width: 14px;
            height: 14px;
          }

          .copy {
            width: 20px;
            height: 20px;
            font-size: 20px;
          }
        }
      }

      .main {
        flex: 1;
        background: var(--color-white);
        padding: 26px 24px;

        :deep(.arco-collapse-item-header) {
          background: #eefbee;
        }

        :deep(.arco-collapse-item-content) {
          background: var(--color-white);
          padding: 0;
        }

        :deep(.arco-collapse-item-content-box) {
          padding: 0;
        }

        // 表格 - tbody
        :deep(.arco-table-td) {
          background: #fafbfc;
        }

        // 输入框
        :deep(
            .arco-input-wrapper:focus-within,
            .arco-input-wrapper.arco-input-focus
          ) {
          background-color: initial;
          box-shadow: initial;
          border-color: transparent;
        }

        :deep(.arco-input-wrapper, .arco-input-wrapper:hover) {
          background-color: initial;
        }

        :deep(.arco-input-wrapper .arco-input::placeholder) {
          color: #c9cdd4;
        }
      }
    }
  }
</style>
