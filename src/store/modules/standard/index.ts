import { defineStore } from 'pinia';

interface StandardState {
  diyStandard?: string;
  diySubcategory?: string;
  diyArea?: string;
  industryStr?: string;
  industryId?: string;
  cycleType?: string;
  // 标准id
  sourceId?: string;
  // 该标识仅用于判断标准选择页面（standardConfig）选择的是否是标准
  packetFlag?: 1 | 0;
}

const useStandardStore = defineStore('standard', {
  state(): StandardState {
    return {
      diyStandard: '',
      diySubcategory: '',
      diyArea: '',
      industryStr: '',
      industryId: '',
      cycleType: '',
      sourceId: '',
      packetFlag: 0
    };
  },
  actions: {
    setInfo(partial: Partial<StandardState>) {
      this.$patch(partial);
    }
  },
  persist: true
});

export default useStandardStore;
