import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const MY_DATA_ITEM: AppRouteRecordRaw = {
  path: '/item',
  component: DEFAULT_LAYOUT,
  name: 'dataItem',
  redirect: '/item/self',
  meta: {
    locale: 'menu.myDataItem',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 2,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'self',
      name: 'myDataItem',
      component: () => import('@/views/my-data-item/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'dataItem',
      },
    },
  ],
};

export default MY_DATA_ITEM;
