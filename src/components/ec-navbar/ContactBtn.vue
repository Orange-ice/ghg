<template>
  <a-popover position="br" trigger="click" content-class="contact-popper">
    <a-tooltip position="br" :content="$t('navbar.contactService')" mini>
      <a-button class="nav-btn">
        <iconpark-icon name="lianxikefu"></iconpark-icon>
      </a-button>
    </a-tooltip>
    <template #content>
      <ContactContent />
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import ContactContent from '@/components/ec-navbar/ContactContent.vue';

defineOptions({
  name: 'ContactBtn'
});
</script>

<style lang="less">
.contact-popper {
  padding: 11px 20px 14px 18px;

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
}
</style>
