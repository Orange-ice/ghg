<script setup lang="ts">
import AppMenu from '@/components/ec-navbar/AppMenu.vue';
import TopLogo from '@/components/ec-navbar/TopLogo.vue';
import HomeBtn from '@/components/ec-navbar/HomeBtn.vue';
import FeedBackBtn from '@/components/ec-navbar/FeedBackBtn.vue';
import ContactBtn from '@/components/ec-navbar/ContactBtn.vue';
</script>

<template>
  <div class="ec-navbar">
    <div class="left-side">
      <AppMenu />
      <TopLogo />
      <HomeBtn />
    </div>
    <div class="right-side">
      <FeedBackBtn />
      <ContactBtn />
    </div>
  </div>
</template>

<style lang="less" scoped>
.ec-navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border-1);
  .left-side {
    display: flex;
    align-items: center;
  }
  .right-side {
    display: flex;
    padding-right: 16px;
    align-items: center;
  }
  .navbar-title {
    line-height: 30px;
    font-size: 18px;
    cursor: pointer;
  }
  .split-line {
    margin: 0 12px 0 11px;
    width: 1px;
    height: 16px;
    background-color: var(--color-fill-2);
  }
  .search-area {
    position: relative;
    margin-right: 20px;
    .search-input {
      width: 130px;
      transition: width 0.3s;
      border-radius: 12px;
      &.focus {
        width: 360px;
        background-color: var(--color-bg-2);
        border-color: rgb(var(--primary-6));
        box-shadow: none;
        &.active {
          border-bottom: 0;
          box-shadow: none;

          border-radius: 12px 12px 0 0;
        }
      }
    }
    .search-box {
      width: 100%;
      padding: 0 12px;
      position: absolute;
      left: 0;
      top: 100%;
      background-color: #fff;
      border: 1px solid rgb(var(--primary-6));
      border-radius: 12px;
      border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      .search-items {
        border-top: 1px solid var(--color-border-1);
        max-height: 200px;
        overflow: auto;
        padding: 7px 0;
        cursor: pointer;
        .search-item {
          display: flex;
          align-items: center;
          padding: 0 8px;
          height: 34px;
          border-radius: 6px;
          &:hover {
            background-color: var(--color-fill-2);
          }
          .serch-item-text {
            margin-left: 10px;
            width: 290px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            b {
              color: rgb(var(--primary-6));
            }
          }
        }
      }
    }
  }
  .empty {
    padding: 26px 0 24px;
    text-align: center;
    font-size: 13px;

    img {
      display: block;
      margin: 0 auto;
      width: 137px;
      height: 94px;
    }

    .text {
      margin-top: 16px;
      color: #c9cdd4;
      line-height: 18px;
    }
  }
}


</style>

<style lang="less">
.arco-btn-secondary.nav-btn {
  margin-right: 16px;
  padding: 0;
  width: 28px;
  height: 28px;
  border: 0;
  background-color: transparent;
  color: rgb(var(--gray-8));
  font-size: 24px;
  border-radius: 6px;
  text-align: center;
  &:hover {
    background-color: var(--color-fill-2);
  }
}
</style>
