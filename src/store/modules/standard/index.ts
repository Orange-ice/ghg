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
      sourceId: ''
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
