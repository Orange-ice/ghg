import axios from 'axios';
import { DictResponse } from '@/api/common/types';

// 查询字典
export function getDict() {
  return axios.get<DictResponse>('/constDictionary/init');
}
