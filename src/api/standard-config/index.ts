import axios from 'axios';
import { StandardCategory } from '@/api/standard-config/types';

// 查询标准选择的数据
export function getAllStandards() {
  return axios.post<StandardCategory[]>('/packet/getAllGroupList', {});
}
