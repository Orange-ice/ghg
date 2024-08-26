import axios from 'axios';
import { AreaItem, StandardCategory } from '@/api/standard-config/types';

// 查询标准选择的数据
export function getAllStandards() {
  return axios.post<StandardCategory[]>('/packet/getAllGroupList', {});
}

// 查询地区列表
export function getAreaList(data: {
  diyStandard: string;
  diySubcategory: string;
}) {
  return axios.post<AreaItem[]>('/packet/getAreaList', data);
}
