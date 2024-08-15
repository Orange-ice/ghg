import { createPinia } from 'pinia';
import useCDataStore from '@/store/modules/cdata';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useCDataStore };
export default pinia;
