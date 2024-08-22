import axios from 'axios';
import {
  CDataDetail,
  FactorHead,
  FactorQueryParams,
  FactorVal
} from '@/api/carbon-report/types';

// 查询详情数据
export function getEmissionData(id: string) {
  return axios.get<CDataDetail>('/custom/emissionData/detailVo', {
    params: { id }
  });
}

// 查询框架分组树
export function getFrameGroups(id: string) {
  return axios.get<any[]>('/custom/emissionFg/getFgList', {
    params: { recordId: id }
  });
}

// 因子表表头
export function getFactorHead(tabId: string) {
  return axios.post<FactorHead[]>('/factorTabHeader/getList', { tabId });
}

// 查询因子表数据
export function getFactors(data: FactorQueryParams) {
  return axios.post<FactorVal[]>('/factorTabValue/getBusPage', data);
}
