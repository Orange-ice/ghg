import axios from 'axios';
import {
  AreaItem,
  Standard,
  StandardCategory
} from '@/api/standard-config/types';

// 查询标准选择的数据
export function getAllStandards() {
  return axios.post<StandardCategory[]>('/packet/getAllGroupList', {});
}

// 查询地区列表
export function getAreaList(data: {
  diyStandard: string;
  diySubcategory?: string;
}) {
  return axios.post<AreaItem[]>('/packet/getAreaList', data);
}

// 查询行业列表
export function getIndustryList(data: {
  diyStandard: string;
  diySubcategory?: string;
  diyArea?: string;
}) {
  return axios.post<Standard[]>('/packet/getHaveIndustryList', data);
}

// 公式添加标准
export function addStandard(data: { sourceId: string; useCycle: string }) {
  return axios.post('/custom/packet/copy', data);
}
