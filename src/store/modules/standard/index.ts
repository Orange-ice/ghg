import { defineStore } from 'pinia';

interface StandardState {
  currentStandard: string;
}

const useStandardStore = defineStore('standard', {
  state() {
    return {
      currentStandard: ''
    };
  },
  actions: {
    setInfo(partial: Partial<StandardState>) {
      this.$patch(partial);
    }
  }
});

export default useStandardStore;
