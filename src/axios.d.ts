import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * @description 接口前缀配置
     * */
    prefix?: string;
    /**
     * @description 是否需要传递token
     * */
    needToken?: boolean;
  }
}
