<script setup lang="ts">
  /**
   * @description Component 确定核算标准弹框
   * */
  import { useRouter } from 'vue-router';
  import { Standard } from '@/api/standard-config/types';
  import { useDictStore, useStandardStore } from '@/store';
  import { DICE_CODE } from '@/config/dictCode';

  const standardStore = useStandardStore();
  const dictStore = useDictStore();

  const props = defineProps<{
    standard?: Standard;
  }>();

  const modelValue = defineModel<boolean>();

  const router = useRouter();

  const submit = () => {
    // 如果 packetFlag 为 1，直接跳转到周期选择页面
    if (props.standard?.packetFlag === 1) {
      const {
        diyStandard,
        diySubcategory,
        diyArea,
        industryStr,
        industryId,
        id,
        packetFlag
      } = props.standard;
      standardStore.setInfo({
        diyStandard,
        diySubcategory,
        diyArea,
        industryStr,
        industryId,
        sourceId: id,
        packetFlag
      });
      router.push({ name: 'standardCycle' });
      return;
    }
    
    standardStore.setInfo({
      diyStandard: props.standard?.diyStandard,
      diySubcategory: props.standard?.id
    });
    // 地方标准
    if (
      dictStore.dictionaryMap[props.standard?.id || '']?.code === DICE_CODE.DFZN
    ) {
      router.push({ name: 'standardArea' });
      return;
    }
    // 其他标准跳行业选择
    router.push({ name: 'standardIndustry' });
  };
</script>

<template>
  <a-modal
    v-model:visible="modelValue"
    title="确认核算标准"
    title-align="start"
    ok-text="确认"
    body-class="standard-confirm"
    @ok="submit"
  >
    <p>
      以下为本次选择的核算标准，确认后该账号<span>不可再次修改及变更！</span>
    </p>
    <div>{{ standard?.name }}</div>
    <p>确认无误后，点击下方[确认]按钮完成核算标准选择</p>
  </a-modal>
</template>

<style lang="less" scoped>
  .standard-confirm {
    > p {
      font-weight: 400;
      font-size: 14px;
      color: var(--text-1);
      line-height: 20px;

      > span {
        font-weight: 600;
      }
    }

    > div {
      margin: 16px 0;
      padding: 16px;
      background: #e8fff1;
      border-radius: 4px;

      font-weight: 600;
      font-size: 14px;
      color: #008f50;
      line-height: 20px;
    }
  }
</style>
