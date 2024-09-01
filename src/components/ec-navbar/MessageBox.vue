<template>
  <div class="message-box">
    <div class="message-head">
      <b>{{ $t('navbar.message') }}</b>
      <a-space :size="15" class="message-head-right">
        <a-tooltip position="bottom" :content="$t('navbar.historyMsg')"
        >
          <a-button
            size="mini"
            class="nav-btn"
            @click="goMessageCenter"
          >
            <template #icon>
              <iconpark-icon name="lishixiaoxi" size="14"></iconpark-icon>
            </template>
          </a-button
          >
        </a-tooltip>
        <div class="message-head-line"></div>
        <a-link @click="setAllRead">{{ $t('navbar.allRead') }}</a-link>
      </a-space>
    </div>
    <a-spin :loading="initLoading" class="message-body">
      <a-list
        v-show="list.length > 0"
        :bordered="false"
        :max-height="311"
        @reach-bottom="getMsgList"
        :scrollbar="true"
        :bottom-offset="20"
      >
        <template #scroll-loading>
          <div v-if="noMore" class="fs13 color3">{{ $t('navbar.noMsg') }}</div>
          <a-spin v-if="!noMore && loading" />
        </template>
        <!-- <a-list-item v-for="item in list" :key="item.uuid">{{
          item.title
        }}</a-list-item> -->
        <a-list-item
          class="message-list"
          :class="{ 'is-read': Boolean(item.readTime) }"
          v-for="item in list"
          :key="item.uuid"
          @click="setMsgRead(item)"
        >
          <img src="@/assets/images/default_roles.svg" />
          <div class="message-info">
            <div class="message-info-title color2">
              <span>{{ item.title }}</span>
              <span>{{ formatDateToStr(item.createTime) }}</span>
            </div>
            <div class="message-info-content fs13">
              {{ item.content }}
            </div>
          </div>
        </a-list-item>
      </a-list>
      <div class="no-data" v-if="list.length === 0">
        <img src="@/assets/images/noData.png" />
        <div class="color4 fs13">{{ $t('navbar.noRecentMsg') }}</div>
      </div>
    </a-spin>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store';
// import useRouterPush from '@/utils/router';
import {
  getMessageList,
  setMessageRead,
  messageRead
} from '@/api/message';
// import { useI18n } from 'vue-i18n';
import { MessageType } from '@/store/modules/user/types';
import { Message } from '@arco-design/web-vue';

// const { t } = useI18n();
defineOptions({
  name: 'MessageBox'
});
// const { push } = useRouterPush();
const userStore = useUserStore();
const form = reactive({
  page: 1, // 未读
  size: 10,
  readType: ''
});
const totals = reactive({
  unread: 0,
  all: 0
});
const initLoading = ref(false);
const loading = ref(false);
const noMore = ref(false);
const list = ref<MessageType[]>([]);
const getMsgList = async () => {
  if (noMore.value || initLoading.value || loading.value) {
    return;
  }
  if (form.page === 1) {
    initLoading.value = true;
    userStore.getMsgList();
  }
  loading.value = true;
  const { data, total } = await getMessageList(
    userStore.workBenchUserInfo.userId as string,
    form
  );
  initLoading.value = false;
  loading.value = false;
  if (data) {
    data?.forEach((item) => {
      item.content = item.content.substring(0, 15);
    });
    list.value = list.value.concat(data || []);
    totals.all = total || 0;
    if (!total || list.value.length >= total) {
      noMore.value = true;
    } else {
      form.page+=1;
    }
  }
};


const formatDateToStr = (time: string) => {
  const d = new Date(time).getTime();
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.floor(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.floor(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 8) {
    return Math.floor(diff / 3600 / 24) + '天前';
  } else if (diff < 3600 * 24 * 31) {
    return Math.floor(diff / 3600 / 24 / 7) + '周前';
  } else if (diff < 3600 * 24 * 365) {
    return Math.floor(diff / 3600 / 24 / 30) + '月前';
  } else {
    return '一年前';
  }
};

const setMsgRead = async (item: MessageType) => {
  const url = `/workbench/settings/messageCenter/content?type=message&uuid=${item.uuid}`;
  // push({
  //   path: `/settings/messageCenter/content`,
  //   query: {
  //     uuid: item.uuid,
  //     type: 'message'
  //   }
  // });
  window.open(url, '_self');
  if (item.readTime) {
    return;
  }
  const res = await setMessageRead(item.uuid);
  if (res.success) {
    item.readTime = '1';
  }
};
const setAllRead = async () => {
  const res = await messageRead(userStore.workBenchUserInfo.userId as string, 'all');
  if (res.success) {
    Message.success('操作成功');
    form.page = 1;
    list.value = [];
    noMore.value = false;
    getMsgList();
  }
};

const goMessageCenter = () => {
  window.location.href = '/workbench/settings/messageCenter/message';
};

</script>


<style scoped lang="less">
.message-box {
  width: 320px;
}

.message-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-bottom: 20px;

  .message-head-right {
    :deep(.arco-space-item:first-child) {
      margin-right: 10px !important;
    }

    .nav-btn {
      margin-right: 0;
    }
  }
  .message-head-line {
    width: 1px;
    height: 10px;
    background-color: var(--color-fill-2);
  }
}

.message-body {
  width: 100%;
  height: 311px;

  .message-list {
    margin-bottom: 4px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-fill-2);
    }

    &.is-read {
      color: var(--color-text-4);

      .message-info-title {
        color: var(--color-text-4);
      }

      img {
        opacity: 0.5;
      }
    }

    :deep(.arco-list-item-content) {
      width: 100%;
      display: flex;

      img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }

      .message-info {
        flex: 1;
      }

      .message-info-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 4px;

        span:first-of-type {
          flex: 1;
        }
      }
    }
  }

  &:deep(.arco-list-item) {
    padding: 10px !important;
    border: 0 !important;
  }

  .no-data {
    text-align: center;
    margin: 0 auto;
    margin-top: 90px;

    img {
      width: 138px;
      height: 94px;
      margin-bottom: 15px;
    }
  }
}
</style>
