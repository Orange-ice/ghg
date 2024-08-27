import { defineStore } from 'pinia';
import { getCustomDict, getDict } from '@/api/common';
import { DictItem } from '@/api/common/types';

type DictKeys =
  // 排放类型
  | 'EMISSION_CATEGORIES'
  // 公式字段类型
  | 'FORMULA_FIELD_CATEGORY'
  // 填报周期
  | 'GHG_DATE_TIME_USE';

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
      GHG_DATE_TIME_USE: []
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
      const customRes = await getCustomDict();

      const res = await getDict();
      const keyObj = this.analyzeDictKeyObj(
        res.data.dictionaryList.concat(customRes.data)
      );
      const dictMap = customRes.data.reduce((acc, item) => {
        if (item.children && Array.isArray(item.children)) {
          item.children.forEach((i) => {
            acc[i.id] = i;
          });
        }
        return acc;
      }, res.data.dictionaryMap || {});

      this.setDictInfo({ dictionaryMap: dictMap, ...keyObj });
    },
  },
});

export default useDictStore;
