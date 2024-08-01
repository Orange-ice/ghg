import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { Message } from '@arco-design/web-vue';
import { getToken } from '@/utils/auth';
import { API_PREFIX } from '@/api/prefix';

export interface HttpResponse<T = unknown> {
  code?: string;
  data?: T;
  message?: string;
  page?: number;
  size?: number;
  total?: number;
  totalPageNum?: number;
  success?: boolean;
}

axios.interceptors.request.use(
  (config) => {
    const { needToken = true, prefix = API_PREFIX.GHG } = config;
    // 设置接口前缀
    config.url = `${prefix}${config.url}`;
    const token = getToken();
    if (!config.headers) {
      config.headers = {};
    }
    if (token && needToken) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error.
    if (res.code === '200') return res;

    if (response.config.responseType === 'blob') {
      return response;
    }

    Message.error({
      content: res.message || '未知错误',
      duration: 5 * 1000,
    });
    return Promise.reject(res);
  },
  (error) => {
    const errRes = error.response.data;
    if (errRes.code === '401' || error.response.status === 401) {
      // TODO 退出登录
      return Promise.reject(
        new Error('无效的会话，或者会话已过期，请重新登录。')
      );
    }

    Message.error({
      content: errRes.msg || '系统错误',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
