<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/store';
import { findLca } from '@/api/user';
// import ContactService from '@/components/navbar/components/contact-service.vue';

defineOptions({
  name: 'AppMenu'
});
const userStore = useUserStore();


const isAuth = computed(() => {
  return userStore.workBenchUserInfo.isAuth;
});
const show = ref(false);

const contactVisible = ref(false);


const queryLca = async () => {
  const res = await findLca({
    companyId: userStore.company?.id || ''
  });
  if (res.data) {
    userStore.setInfo({lcaStatus: res.data});
  }
};


const toPage = (url: string, name: string) => {
  if (name === 'navbar.app.lca' && !userStore.lcaStatus.hasLca) {
    contactVisible.value = true;
  } else if (isAuth.value === '2' || name === 'navbar.app.jimu') {
    window.open(url, name === 'navbar.app.view' ? '_blank' : '_self');
  } else {
    /** 未认证跳转认证页面 */
    window.location.href = `/workbench/authentication?scene=${name}`;
  }
  show.value = false;
};

onMounted(() => {
  queryLca();
});


</script>



<template>
  <div class="app-menu" @click.self="show = !show">
    <div
      class="banner_menu"
      :class="{ changeFigure: show }"
      @mousedown="show = !show"
      @mouseenter="show = true"
    >
      <s></s>
      <s></s>
      <s></s>
    </div>
    <div v-if="show" class="arco-modal-mask" @click.stop="show = false"></div>
    <Transition name="fade-top" mode="out-in">
      <div v-if="show" class="continuation" >
        <main>
          <div
            v-for="(item, index) in userStore.workBenchRole.appMenuList"
            :key="index"
            class="apply_view"
            @click="toPage(item.menuUrl, item.menuName)"
          >
            <div class="left_icon">
              <img :src="item.menuIcon" alt="" />
            </div>
            <div class="right_desc">
              <p>{{ $t(item.menuCode) }}</p>
              <p>{{ $t(item.menuDesc || '') }}</p>
            </div>
          </div>
        </main>
      </div>
    </Transition>
<!--    <ContactService v-model:visible="contactVisible" />-->
  </div>
</template>

<style lang="less" scoped>
.app-menu {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--primary-6));
  cursor: pointer;

  /* banner三条横线——菜单 start */

  .banner_menu {
    position: relative;
    z-index: 101;
    width: 56px;
    height: 56px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;

    s {
      background-color: #fff;
      position: absolute;
      left: 50%;
      margin-left: -12px;
      width: 24px;
      height: 2px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.5s ease 0s;
      transition: all 0.5s ease 0s;
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;

      &:first-child {
        top: 50%;
        margin-top: -8px;
      }

      &:nth-child(2) {
        top: 50%;
        margin-top: -1px;
      }

      &:nth-child(3) {
        top: 50%;
        margin-top: 6px;
      }
    }
  }

  /* banner三条横线——菜单 end */

  .changeFigure s:first-child {
    transform: rotate(45deg) translate(1px) !important;
    margin-top: -9px;
  }

  .changeFigure s:nth-child(2) {
    -webkit-transform: translateX(40px) scaleX(1.5);
    transform: translateX(40px) scaleX(1.5);
    opacity: 0;
  }

  .changeFigure s:nth-child(3) {
    -webkit-transform: rotate(-45deg) translate(1px) !important;
    transform: rotate(-45deg) translate(0) !important;
    margin-top: 8px;
  }

  .arco-modal-mask {
    z-index: 1;
    width: 100vw;
    height: calc(100vh - 56px);
    top: 100%;
  }
}

.continuation {
  width: 100vw;
  padding: 4px 24px 29px 24px;
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0;
  background-color: #fff;

  main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .apply_view {
      width: 384px;
      padding: 8px;
      border-radius: 8px;
      margin-right: 24px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: var(--color-fill-2);
      }

      &:nth-child(3n) {
        margin-right: 0;
      }

      .left_icon {
        display: flex;
        align-items: center;
        margin-right: 12px;

        img {
          width: 40px;
        }

        iconpark-icon {
          font-size: 40px;
          margin: 8px;
        }
      }

      .right_desc {
        p:nth-of-type(1) {
          height: 14px;
          font-size: 14px;
          font-weight: 500;
          color: #1d2129;
          line-height: 14px;
          // margin-top: 12px;
        }

        p:nth-of-type(2) {
          height: 12px;
          font-size: 12px;
          font-weight: 300;
          color: #86909c;
          line-height: 12px;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
