import { DEFAULT_LAYOUT } from '@/router/routes/base';
import { AppRouteRecordRaw } from '@/router/routes/types';

/**
 * @description 标准管理页面 展示已选择的标准
 * */
const STANDARD_DISPLAY: AppRouteRecordRaw = {
  path: '/standard',
  name: 'standardDisplay',
  component: DEFAULT_LAYOUT,
  redirect: '/standard/display',
  meta: {
    locale: 'menu.standardDisplay',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 3,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'display',
      component: () => import('@/views/standard-display/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'standardDisplay',
      },
    },
  ],
};

export default STANDARD_DISPLAY;
