import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData, userDetail, userRoles, userWebInfo,
} from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    // name: undefined,
    // avatar: undefined,
    // job: undefined,
    // organization: undefined,
    // location: undefined,
    // email: undefined,
    // introduction: undefined,
    // personalWebsite: undefined,
    // jobName: undefined,
    // organizationName: undefined,
    // locationName: undefined,
    // phone: undefined,
    // registrationDate: undefined,
    // accountId: undefined,
    // certification: undefined,
    role: '',
    id: undefined,
    username: undefined,
    industry: {
      id: '',
      name: ''
    },
    company: {
      id: '',
      name: ''
    },
    initFlag: false,

    // 下列信息主要用于
    workBenchUserInfo: {
      accesstoken: '',
      comId: '',
      companyId: '',
      companyName: '',
      email: '',
      mobile: '',
      name: '',
      userId: '',
      username: '',
      iconUrl: '',
      logoUrl: '',
      licenseStatus: '',
      indexLogoUrl: '',
      indexSkipUrl: '',
      isAuth: ''
    },
    lcaStatus: {
      expireDate: '',
      hasLca: false
    },
    workBenchRole: {
      buttons: [],
      menuModule: [],
      menuPage: [],
      appList: [],
      appMenuList: []
    },
    webInfo: {
      logoutRedirectUrl: '',
      loginLogo: '',
      icp: '',
      picp: '',
      phone: ''
    },

  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    }
  },

  actions: {
    switchRoles() {
      // return new Promise((resolve) => {
      //   this.role = this.role === 'user' ? 'admin' : 'user';
      //   resolve(this.role);
      // });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();

      this.setInfo({...res.data});
    },

    // 获取工作台用户信息
    async getWorkbenchUserInfo() {
      const res = await userDetail();
      if (res.data) {
        if (!res.data.licenseStatus) {
          res.data.licenseStatus = '0';
        }
        this.setInfo({ workBenchUserInfo: res.data });
        // this.initWebSocket(data.userId);
        // this.getMsgList();
        // return Promise.resolve();
      }
    },

    async getUserRoles() {
      const res = await userRoles();
      if (res.data) {
        this.setInfo({ workBenchRole: res.data });
      }
    },
    async getWebInfo() {
      const res = await userWebInfo();
      if(res.data){
        this.setInfo({webInfo: res.data.webInfo})
      }
      // if (!error && data) {
      //   this.setWebInfo(data.webInfo);
      //   return Promise.resolve();
      // } else {
      //   return Promise.reject(error);
      // }
    },

    async initInfo(){
      await Promise.all([this.info(),this.getWorkbenchUserInfo(),this.getUserRoles()])
    },


    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        setToken(res.data.accesstoken);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
        await userLogout();
      } finally {
        this.logoutCallBack();
      }
    }
  },
  persist: {
    storage: window.sessionStorage,
    paths: ['initFlag']
  }
});

export default useUserStore;
