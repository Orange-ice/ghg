import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import { API_PREFIX } from '@/api/prefix';

export interface LoginData {
  username: string;
  password: string;
  sysTemType: string;
}

export interface LoginRes {
  accesstoken: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/sso/oauth/login', data, {
    prefix: API_PREFIX.EC,
  });
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/roles/getUserInfo', {
    prefix: API_PREFIX.PERMISSION,
    params: { projectType: 'ghg' },
  });
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
