import axios from 'axios';
import { CDataDetail } from '@/api/carbon-report/types';

// 查询详情数据
export function getEmissionData(id: string) {
  return axios.get<CDataDetail>('/custom/emissionData/detailVo', {
    params: { id },
  });
}
