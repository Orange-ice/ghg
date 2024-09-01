<template>
  <div class="user-area">
    <a-popover
      v-model:popup-visible="userShow"
      position="br"
      trigger="click"
      :content-style="{ padding: '0' }"
    >
      <div class="operate">
        <div class="user-avatar">
          <img :src="userInfo.pic || defaultAvatar" />
        </div>
        <div class="user-name">
          <div class="user-company" :title="userInfo.companyName">
            {{ userInfo.companyName }}
          </div>
          <!-- <a-tooltip content="功能开发中" mini> -->
          <a-tag
            :color="authStatus[userInfo.isAuth as string].status"
            class="user-auth"
          >
            <template #icon v-if="userInfo.isAuth === '2'">
              <iconpark-icon name="yitanrenzheng"></iconpark-icon>
            </template>
            {{ authStatus[userInfo.isAuth as string].label }}
          </a-tag>
          <!-- </a-tooltip> -->
        </div>
        <div class="more-select">
          <iconpark-icon name="down-arrow" size="14"></iconpark-icon>
        </div>
      </div>
      <template #content>
        <div class="user-content">
          <div class="user-content-head">
            <div class="user-avatar">
              <img :src="userInfo.pic || defaultAvatar" alt="" />
            </div>
            <div class="user-info">
              <div class="user-name">
                <span>{{ userInfo.username }}</span>
                <img
                  :src="userInfo.isAuth == '2' ? tipSuccessImg : tipsInfoImg"
                  alt=""
                />
              </div>
              <div class="user-company color3">
                {{ userInfo.companyName }}
              </div>
            </div>
          </div>
          <div class="user-operate color1">
<!--            <a-popover-->
<!--              position="lt"-->
<!--              trigger="click"-->
<!--              :content-style="{ padding: '0' }"-->
<!--            >-->
<!--              <div class="user-operate-item">-->
<!--                <span style="margin-right: auto">{{ $t('navbar.language') }}</span>-->
<!--                <iconpark-icon name="right" size="14"></iconpark-icon>-->
<!--              </div>-->
<!--              <template #content>-->
<!--                <LanguageUse />-->
<!--              </template>-->
<!--            </a-popover>-->
<!--            <div class="split-line"></div>-->
            <div
              class="user-operate-item"
              v-permission="['manage_org']"
              @click="handClickItem('/workbench/settings/company')"
            >
              {{ $t('navbar.org') }}
            </div>
            <div
              class="user-operate-item"
              v-permission="['personal_Center']"
              @click="handClickItem('/workbench/settings/userCenter/baseinfo')"
            >
              {{ $t('navbar.usercenter') }}
            </div>
            <div class="user-operate-item" @click="handleLogout">
              {{ $t('navbar.logout') }}
            </div>
          </div>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
// import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { logout } from '@/api/user';
// import useRouterPush from '@/utils/router';
import defaultAvatar from '@/assets/images/head.svg';
import tipSuccessImg from '@/assets/images/tipsSuccess.png';
import tipsInfoImg from '@/assets/images/tipsInfo.png';
// import LanguageUse from '@/components/navbar/components/LanguageUse.vue';
import { toLogin } from '@/utils';
import { clearLoginStorage, removeItem } from '@/utils/auth';
// import LanguageUse from './LanguageUse.vue';

defineOptions({
  name: 'UserArea'
});
const authStatus: Record<string, any> = {
  '0': { status: '', label: '未认证' },
  '1': { status: 'orange', label: '认证中' },
  '2': { status: 'green', label: '易碳认证' },
  '3': { status: 'red', label: '认证失败' }
};
const userStore = useUserStore();
const userInfo = computed(() => {
  return userStore.workBenchUserInfo;
});
const userShow = ref(false);
// const { push } = useRouterPush();
const handClickItem = (url: string) => {
  window.location.href = url;
  // push({ name });
  // userShow.value = false;
};
const handleLogout = async () => {
  const url = localStorage.getItem('jumpUrl')!;
  if (url) {
    clearLoginStorage();
    removeItem('jumpUrl');
    // window.open(url, '_self');
    window.location.replace(url);
    // setTimeout(async () => {
    //   await removeItem('logoutUrl');
    // }, 1000);
    return;
  }

  // Modal.warning({
  //   titleAlign: 'start',
  //   title: '确认退出？',
  //   content: '',
  //   okText: '确定',
  //   cancelText: '取消',
  //   hideCancel: false,
  //   okButtonProps: { status: 'warning' },
  //   cancelButtonProps: { type: 'outline' },
  //   async onOk() {
  //     await logout();
  //     // window.$message?.success('登出成功');
  //     userStore.logoutCallBack();
  //     toLogin();
  //   }
  // });

  await logout();
  // window.$message?.success('登出成功');
  userStore.logoutCallBack();
  toLogin();

};
</script>

<style lang="less" scoped>
.user-area {
  .operate {
    padding: 2px 0 2px 12px;
    display: flex;
    align-items: center;
    width: 236px;
    cursor: pointer;

    &:hover {
      background: #f2f3f5;
      border-radius: 6px;
    }
  }
  .user-avatar {
    margin-right: 10px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .user-name {
    .user-company {
      position: relative;
      top: -2px;
      width: 122px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-auth {
      position: relative;
      top: -2px;
      padding: 0px 4px 0px 4px;
      height: 18px;
      line-height: 16px;
      :deep(.arco-tag-icon) {
        margin-right: 3px;
        iconpark-icon {
          position: relative;
          top: 2px;
        }
      }
      &.arco-tag-green {
        background-color: rgba(var(--primary-6), 0.1);
        color: rgb(var(--primary-6));
      }
      &.arco-tag-red {
        background-color: rgb(var(--danger-1));
        color: rgb(var(--danger-6));
      }
      &.arco-tag-orange {
        background-color: rgb(var(--warning-1));
        color: rgb(var(--warning-6));
      }
    }
  }
  .more-select {
    padding-right: 14px;
    flex: 1;
    margin-left: 10px;
    text-align: right;
  }
}
.user-content {
  width: 288px;
  .user-content-head {
    padding: 0 12px 0 14px;
    margin-bottom: 4px;
    height: 70px;
    line-height: 1;
    display: flex;
    align-items: center;
  }
  .user-avatar {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .user-info {
    .user-name {
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      font-weight: 600;
      color: var(--color-text-1);
      img {
        margin-left: 2px;
        height: 24px;
      }
    }
    .user-company {
      font-size: 13px;
      line-height: 20px;
      color: var(--color-text-3);
    }
  }
  .user-operate {
    padding: 5px 0;
    border-top: 1px solid var(--color-border-1);
    .user-operate-item {
      font-size: 14px;
      height: 44px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      &:hover {
        background-color: var(--color-fill-3);
      }
    }
    .split-line {
      height: 5px;
      border-bottom: 1px solid var(--color-border-1);
    }
  }
}
</style>

