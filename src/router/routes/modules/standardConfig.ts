import { AppRouteRecordRaw } from '@/router/routes/types';

const WithoutMenuLayout = () => import('@/layout/without-menu-layout.vue');

/**
 *  @description 标准选择页面 新用户首次进去选择及后续新增选择
 * */
const STANDARD_CONFIG: AppRouteRecordRaw = {
  path: '/standard',
  component: WithoutMenuLayout,
  redirect: '/standard/config',
  meta: {
    order: 0,
    requiresAuth: true,
  },
  children: [
    // 标准选择
    {
      path: 'config',
      name: 'standardConfig',
      component: () => import('@/views/standard-config/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // 选择地区
    {
      path: 'area',
      name: 'standardArea',
      component: () => import('@/views/standard-config/area.vue'),
    },
    // 选择行业
    {
      path: 'industry',
      name: 'standardIndustry',
      component: () => import('@/views/standard-config/industry.vue'),
    },
    // 选择填报周期，最后确认选择的信息
    {
      path: 'cycle',
      name: 'standardCycle',
      component: () => import('@/views/standard-config/cycle.vue'),
    },
  ],
};

export default STANDARD_CONFIG;
