<script setup lang="ts">
  import { useDictStore, useStandardStore } from '@/store';
  import { ClosedFunc } from '@/types/global';
  import { useRouter } from 'vue-router';
  import { addStandard } from '@/api/standard-config';

  /**
   * @description Component 标准创建确认
   * */
  const modelValue = defineModel<boolean>();

  const props = defineProps<{
    selectedCycle: { id: string; name: string };
  }>();

  const router = useRouter();
  const standardStore = useStandardStore();
  const dictStore = useDictStore();

  const submit = async (done: ClosedFunc) => {
    const submitData = {
      useCycle: props.selectedCycle.id,
      sourceId: standardStore.sourceId || ''
    };
    // console.log('submit Data:::', submitData);
    done(false);
    await addStandard(submitData);
    done(true);
    router.push({ name: 'carbonDashboard' });
  };
</script>

<template>
  <a-modal
    v-model:visible="modelValue"
    title="标准创建确认"
    title-align="start"
    width="704px"
    :cancel-button-props="{ type: 'outline' }"
    :on-before-ok="(done) => submit(done)"
  >
    <div class="container">
      <div class="tip">
        <iconpark-icon name="attention" class="icon" />
        <span>
          当前仅剩余
          <strong>1</strong>
          次标准创建机会，确认后无法修改，请再次核对信息准确无误。
        </span>
      </div>

      <span class="title-text">核算标准</span>
      <div class="standard">
        <span>
          {{ dictStore.dictionaryMap[standardStore.diyStandard || '']?.name }}
        </span>
        <span>
          {{
            dictStore.dictionaryMap[standardStore.diySubcategory || '']?.name
          }}
        </span>
      </div>
      <div class="cycle">
        <span class="title-text">所选行业/地区</span>
        <span class="title-text">填报周期</span>
        <div>
          {{ standardStore.industryStr }}
          {{
            standardStore.diyArea
              ? `（${dictStore.dictionaryMap[standardStore.diyArea]?.name}）`
              : ''
          }}
        </div>
        <div>{{ selectedCycle.name }}</div>
      </div>
    </div>
  </a-modal>
</template>

<style lang="less" scoped>
  .container {
    .title-text {
      font-size: 12px;
      color: #4e5969;
      line-height: 24px;
    }

    .tip {
      padding: 6px 16px;
      background: #fff5eb;
      margin-bottom: 20px;
      display: flex;
      align-items: center;

      > .icon {
        color: #ff7d00;
        margin-right: 6px;
        font-size: 12px;
      }

      > span {
        font-size: 12px;
        color: var(--text-1);
        line-height: 22px;

        > strong {
          color: #ff7d00;
        }
      }
    }

    .standard {
      margin: 12px 0 20px;
      display: flex;
      align-items: center;

      > span:first-child {
        font-size: 16px;
        color: var(--text-1);
        line-height: 24px;
        font-weight: 600;
        margin-right: 8px;
      }

      > span:last-child {
        background: #e8fff1;
        padding: 0 6px;
        font-size: 14px;
        color: #008f50;
        line-height: 20px;
        display: inline-block;
      }
    }

    .cycle {
      margin-bottom: 22px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px 16px;

      > div {
        padding: 12px 16px;
        background: #f7f8fa;
        border-radius: 4px;

        font-weight: 600;
        font-size: 14px;
        color: var(--text-1);
        line-height: 24px;
      }
    }
  }
</style>
