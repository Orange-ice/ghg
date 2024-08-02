import { AppRouteRecordRaw } from '@/router/routes/types';

const WithoutMenuLayout = () => import('@/layout/without-menu-layout.vue');

/**
 *  @description 标准选择页面 新用户首次进去选择及后续新增选择
 * */
const STANDARD_CONFIG: AppRouteRecordRaw = {
  path: '/standard',
  name: 'standardConfig',
  component: WithoutMenuLayout,
  redirect: '/standard/config',
  meta: {
    order: 0,
    requiresAuth: true,
  },
  children: [
    {
      path: 'config',
      component: () => import('@/views/standard-config/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default STANDARD_CONFIG;
