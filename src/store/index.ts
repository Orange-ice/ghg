import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import useCDataStore from '@/store/modules/cdata';
import useDictStore from '@/store/modules/dict';
import useStandardStore from '@/store/modules/standard';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  useAppStore,
  useUserStore,
  useTabBarStore,
  useCDataStore,
  useDictStore,
  useStandardStore
};
export default pinia;
