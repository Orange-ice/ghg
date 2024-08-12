import { AppRouteRecordRaw } from '@/router/routes/types';

const WithoutMenuLayout = () => import('@/layout/without-menu-layout.vue');

const CARBON_REPORT: AppRouteRecordRaw = {
  path: '/carbon',
  component: WithoutMenuLayout,
  redirect: '/carbon/report',
  meta: {
    order: 0,
    requiresAuth: true,
  },
  children: [
    {
      path: 'report',
      name: 'carbonReport',
      component: () => import('@/views/carbon-report/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default CARBON_REPORT;
