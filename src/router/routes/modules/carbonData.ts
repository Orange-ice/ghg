import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CARBON_DASHBOARD: AppRouteRecordRaw = {
  path: '/carbon',
  name: 'carbonData',
  component: DEFAULT_LAYOUT,
  redirect: '/carbon/dashboard',
  meta: {
    locale: 'menu.carbonData',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'dashboard',
      name: 'carbonDashboard',
      component: () => import('@/views/carbon-data/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'carbonData',
      },
    },
  ],
};

export default CARBON_DASHBOARD;
