<script lang="ts" setup>
  import { ref } from 'vue';
  import { FieldValue } from '@/api/carbon-report/types';

  defineProps<{
    field: FieldValue;
  }>();
  const visible = ref(false);
  const handleSwitch = () => {
    visible.value = true;
  };
</script>

<template>
  <div class="factor-input">
    <iconpark-icon name="quesheng" class="icon" />
    <a-input placeholder="请输入" class="input" />
    <iconpark-icon name="switch" class="switch" @click="handleSwitch" />

    <a-drawer
      v-model:visible="visible"
      title="选择因子数据"
      :width="960"
      :footer="false"
      unmount-on-close
    >
      <div class="mb-24px">
        <a-input
          placeholder="请输入因子名称搜索"
          class="w-300px mr-12px"
          :model-value="field.inputVal"
        ></a-input>
        <a-select placeholder="请选择行业" class="w-160px"></a-select>
      </div>
      <a-table></a-table>
    </a-drawer>
  </div>
</template>

<style lang="less" scoped>
  .factor-input {
    display: flex;
    align-items: center;
    position: relative;

    > .icon {
      font-size: 10px;
      width: 10px;
      height: 10px;
    }

    > .input {
      width: 110px;
      margin: 0 4px;
    }

    > .switch {
      font-size: 24px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      display: none;
      position: absolute;
      right: 0;
    }

    &:hover {
      > .switch {
        display: inline-block;
      }
    }
  }
</style>
