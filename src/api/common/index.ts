import axios from 'axios';
import { DictItem, DictResponse } from '@/api/common/types';

// 查询字典
export function getDict() {
  return axios.get<DictResponse>('/constDictionary/init');
}

// 查询自定义字典
export function getCustomDict(data = ['SYS_SUBCATEGORY', 'STANDARD_CATEGORY']) {
  return axios.post<DictItem[]>('/customDictionary/getVoList', data);
}
