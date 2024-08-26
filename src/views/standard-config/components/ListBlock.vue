<script lang="ts" setup>
  defineEmits(['clickItem']);
  defineProps<{
    list: { id: string; name: string }[];
    type: 'area' | 'industry';
  }>();
</script>

<template>
  <div class="list">
    <div
      v-for="item in list"
      :key="item.id"
      class="list-item"
      @click="$emit('clickItem', item)"
    >
      <span>{{ item.name }}</span>
      <iconpark-icon name="beijing" class="icon" />
      <div class="operation">
        <span>选择{{ type === 'area' ? '地区' : '行业' }}</span>
        <iconpark-icon name="arrow-right" class="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;

    &-item {
      background: #f7f8fa;
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      transition: 0.3s;

      > span {
        margin-top: 4px;
        margin-left: 4px;

        font-weight: 600;
        font-size: 16px;
        color: var(--text-1);
        line-height: 24px;
      }

      > .icon {
        font-size: 72px;
        width: 72px;
        height: 72px;
      }

      .operation {
        position: absolute;
        top: 60px;
        left: 16px;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: 0.3s;

        > span {
          font-size: 12px;
          color: var(--text-1);
          line-height: 20px;
        }

        > .icon {
          margin-left: 4px;
          font-size: 16px;
          width: 16px;
          height: 16px;
          color: #008f50;
        }
      }

      &:hover {
        background: #f2f3f5;

        .operation {
          opacity: 1;
        }
      }
    }
  }
</style>
