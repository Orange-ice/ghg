import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CARBON_DATA: AppRouteRecordRaw = {
  path: '/carbon',
  component: DEFAULT_LAYOUT,
  name: 'carbonDataManage',
  redirect: '/carbon/data',
  meta: {
    locale: 'menu.carbonDataManage',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 1,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'data',
      name: 'dataManege',
      component: () => import('@/views/carbon-data/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'carbonDataManage',
      },
    },
  ],
};

export default CARBON_DATA;
