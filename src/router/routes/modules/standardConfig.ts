import { DEFAULT_LAYOUT } from '@/router/routes/base';
import { AppRouteRecordRaw } from '@/router/routes/types';

const STANDARD_CONFIG: AppRouteRecordRaw = {
  path: '/standard',
  name: 'standardConfig',
  component: DEFAULT_LAYOUT,
  redirect: '/standard/config',
  meta: {
    locale: 'menu.standardConfig',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'config',
      component: () => import('@/views/standard-config/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'standardConfig',
      },
    },
  ],
};

export default STANDARD_CONFIG;
