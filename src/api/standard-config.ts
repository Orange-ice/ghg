import axios from 'axios';

// 查询标准选择的数据
export function getAllStandards() {
  return axios.post('/packet/getAllGroupList');
}
