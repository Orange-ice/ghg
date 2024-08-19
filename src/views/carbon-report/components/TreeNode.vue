<script lang="ts" setup>
  import { computed } from 'vue';
  import { useCDataStore } from '@/store';
  import Formula from '@/views/carbon-report/components/Formula.vue';

  const COLORS = ['green', 'orange', 'blue'];
  const cdataStore = useCDataStore();

  const defaultActiveKeys = computed(() => {
    return cdataStore.fgVoList.map((item) => item.id);
  });
</script>

<template>
  <a-collapse :default-active-key="defaultActiveKeys" :bordered="false">
    <a-collapse-item
      v-for="(group, groupIndex) in cdataStore.fgVoList"
      :key="group.id"
      :header="group.name"
      :class="`pb-20px color-${COLORS[groupIndex % COLORS.length]}`"
    >
      <template #extra>
        <a-select
          size="small"
          class="w-200px mr-12px"
          placeholder="请选择计算模型"
          :default-value="group.selectedModel"
          @click.stop
        >
          <a-option
            v-for="modelSelect in group.emissionMVoList"
            :key="modelSelect.id"
            :value="modelSelect.id"
          >
            {{ modelSelect.name }}
          </a-option>
        </a-select>
        <a-button type="outline" @click.stop>复制</a-button>
      </template>

      <!--  公式信息    -->
      <Formula
        v-for="(formula, index) in cdataStore.queryModelFormula(
          group.selectedModel || '',
          group.emissionMVoList
        )"
        :key="formula.id"
        :formula="formula"
        :index="index"
      />

      <template v-if="group?.children?.length">
        <TreeNode />
      </template>
    </a-collapse-item>
  </a-collapse>
</template>

<style lang="less" scoped>
  :deep(.arco-collapse-item-header) {
    background: #eefbee;
  }

  .color-green {
    :deep(.arco-collapse-item-header) {
      background: #eefbee;
    }
  }

  .color-orange {
    :deep(.arco-collapse-item-header) {
      background: #fef4e7;
    }
  }

  .color-blue {
    :deep(.arco-collapse-item-header) {
      background: #ecf2ff;
    }
  }

  :deep(.arco-collapse-item-content) {
    background: var(--color-white);
    padding: 0;
  }

  :deep(.arco-collapse-item-content-box) {
    padding: 0;
  }
</style>
