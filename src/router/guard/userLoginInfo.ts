import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore, useDictStore } from '@/store';
import { isLogin } from '@/utils/auth';
import { ghgInit } from '@/api/common';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    if (isLogin()) {
      if (userStore.username) {
        next();
      } else {
        try {
          await userStore.initInfo();
          if (!userStore.initFlag) {
            ghgInit().then(() => {
              userStore.setInfo({ initFlag: true });
            });
          }
          const dictStore = useDictStore();
          if (!Object.keys(dictStore.dictionaryMap).length) {
            await dictStore.queryDict();
          }
          next();
        } catch (error) {
          await userStore.logout();
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
