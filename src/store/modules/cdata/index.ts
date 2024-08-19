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
      const formulaList = models.find(
        (model) => model.id === modelId
      )?.mfVoList;
      formulaList?.forEach((formula) => {
        if (
          formula.dataFlag &&
          // 页面折叠展开时会多次调用当前方法，避免重复添加
          formula.fieldsVoList.every((item) => item.dictFieldType)
        ) {
          /**
           / 如果公式存在数据项 ，数据项默认显示在第一列，所以在第二列添加【排放类型】,
           * 数据copy数据项的数据，将dictFieldType置为空作为排放类型的标识
           */
          formula.fieldsVoList.splice(1, 0, {
            ...formula.fieldsVoList[0],
            dictFieldType: '',
            name: '排放类型',
          });
          formula.valuesVoList.forEach((val) => {
            val.values.splice(1, 0, {
              ...val.values[0],
              dictFieldType: '',
            });
          });
        }
      });

      console.log(modelId, formulaList);

      return formulaList;
    },
  },
});

export default useCDataStore;
