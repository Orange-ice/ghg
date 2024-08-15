import { defineStore } from 'pinia';
import { CDataDetail, Model } from '@/api/carbon-report/types';
import { getEmissionData } from '@/api/carbon-report';

const useCDataStore = defineStore('cdata', {
  state(): CDataDetail {
    return {
      id: '',
      state: '',
      fgVoList: [],
    };
  },
  actions: {
    setInfo(partial: Partial<CDataDetail>) {
      this.$patch(partial);
    },

    /**
     * @description 获取碳数据详情
     * @param {string} id 碳数据id
     * */
    async queryDetail(id: string) {
      const res = await getEmissionData(id);
      console.log(res.data);
      this.setInfo(res.data);
      this.resolveDetail();
    },

    // 处理碳数据详情 设置默认选中的模型
    resolveDetail() {
      this.$state.fgVoList.forEach((group) => {
        group.selectedModel = group.emissionMVoList?.[0]?.id;
      });
    },

    // 根据模型id查询模型下的公式
    queryModelFormula(modelId: string, models: Model[]) {
      return models.find((model) => model.id === modelId)?.mfVoList;
    },
  },
});

export default useCDataStore;
