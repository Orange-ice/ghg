import { defineStore } from 'pinia';

interface StandardState {
  diyStandard?: string;
  diySubcategory?: string;
  diyArea?: string;
}

const useStandardStore = defineStore('standard', {
  state(): StandardState {
    return {
      diyStandard: '',
      diySubcategory: '',
      diyArea: ''
    };
  },
  actions: {
    setInfo(partial: Partial<StandardState>) {
      this.$patch(partial);
    }
  }
});

export default useStandardStore;
