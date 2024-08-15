import { defineStore } from 'pinia';
import { getDict } from '@/api/common';
import { DictItem } from '@/api/common/types';

type DictKeys =
  // 排放类型
  | 'EMISSION_CATEGORIES'
  // 公式字段类型
  | 'FORMULA_FIELD_CATEGORY';

type DictKeyObj = {
  [key in DictKeys]?: DictItem[];
};

interface DictState extends DictKeyObj {
  dictionaryMap: Record<string, DictItem>;
}

const useDictStore = defineStore('dict', {
  state(): DictState {
    return {
      dictionaryMap: {},
      FORMULA_FIELD_CATEGORY: [],
      EMISSION_CATEGORIES: [],
    };
  },
  actions: {
    setDictInfo(partial: Partial<DictState>) {
      this.$patch(partial);
    },
    analyzeDictKeyObj(arr: DictItem[]) {
      return arr.reduce((pre, cur) => {
        // console.log(cur.name, cur.code, cur.children);
        pre[cur.code as DictKeys] = cur.children;
        return pre;
      }, {} as DictKeyObj);
    },
    async queryDict() {
      const res = await getDict();
      const keyObj = this.analyzeDictKeyObj(res.data.dictionaryList);
      this.setDictInfo({ dictionaryMap: res.data.dictionaryMap, ...keyObj });
    },
  },
});

export default useDictStore;
