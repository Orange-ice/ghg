import axios from 'axios';

export interface MyDataItem {
  id: string;
  name: string;
  remark: string;
}

export interface DataItemFormModel extends Omit<MyDataItem, 'id'> {
  id?: string;
}

// 分页查询数据项
export function getDataItemPage(data: { name: string }) {
  return axios.post<MyDataItem[]>('/custom/dataItem/getPage', data);
}

// 新增/修改数据项
export function addOrUpdateDataItem(
  type: 'add' | 'up',
  data: DataItemFormModel
) {
  return axios.post(`/custom/dataItem/${type}`, data);
}

// 删除数据项
export function removeDateItem(id: string) {
  return axios.delete('/custom/dataItem/deleted', { params: { id } });
}

// 查询全量数据项
export function getAllDataItem(name?: string) {
  return axios.post('/custom/dataItem/getList', { name });
}
