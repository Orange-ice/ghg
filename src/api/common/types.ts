export interface DictItem {
  id: string;
  name: string;
  code: string;
  children?: DictItem[];
}

export interface DictResponse {
  dictionaryList: DictItem[];
  dictionaryMap: Record<string, DictItem>;
}
