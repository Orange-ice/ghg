import axios from 'axios';
import { CDataDetail } from '@/api/carbon-report/types';

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
