<template>
  <div class="contact_content">
    <div class="left_phone">
      <div class="header_Text">热线电话</div>
      <div class="location_mobile" v-for="(item, index) of userStore.webInfo.phoneArr" :key="index">
        {{ item.address }}<span>{{ item.phone }}</span>
      </div>
    </div>

    <div class="right_contart">
      <div class="wxchat_title">微信扫码 联系客服</div>
      <div class="contact_img">
        <img src="@/assets/images/contact.png" />
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';

const userStore = useUserStore();
</script>

<style lang="less" scoped>
.contact_content {
  display: flex;
  line-height: 1;

  .left_phone {
    width: 192px;
    border-right: 1px solid var(--color-border-1);

    .header_Text {
      font-size: 13px;
      font-weight: 500;
      color: var(--color-text-3);
      text-align: left;
    }

    .location_mobile {
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      margin-top: 16px;
      line-height: 19px;

      span {
        color: rgb(var(--primary-6));
        font-size: 16px;
      }
    }
  }

  .right_contart {
    text-align: center;
    padding-left: 19px;
    height: 130px;

    .wxchat_title {
      font-size: 13px;
      font-weight: 500;
      color: var(--color-text-3);
      margin-bottom: 12px;
    }

    .contact_img {
      text-align: center;

      img {
        width: 112px;
        height: 112px;
        object-fit: contain;
      }
    }
  }
}
</style>
