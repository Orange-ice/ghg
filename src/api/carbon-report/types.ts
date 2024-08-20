// 字段表头
interface Field {
  code: string;
  // 字段类型
  dictFieldType: string;
  id: string;
  name: string;
}

export interface FieldValue extends Field {
  factorVal?: string;
  inputVal?: string;
  optioned?: string;
  optionals?: string;
  expressions?: string;
  factorRefer?: string;
  dataId?: string;
}

interface ValueVoItem {
  id: string;
  emfId: string;
  values: FieldValue[];
}

// 公式数据
export interface Formula {
  code: string;
  id: string;
  name: string;
  dataFlag: 1 | 0;
  mainFlag: 1 | 0;
  fieldsVoList: Field[];
  valuesVoList: ValueVoItem[];
  expVoList: FieldValue[];
  checkedExp?: string;
}

// 模型数据
export interface Model {
  id: string;
  name: string;
  modelId: string;
  code: string;
  mfVoList: Formula[];
}

// 分组数据
interface Group {
  name: string;
  id: string;
  industry: string;
  useIndustry: string;
  emissionMVoList: Model[];
  children?: Group[];

  // 当前分组选择的模型
  selectedModel?: string;
}

interface FrameGroup {
  id: string;
  name: string;
  pid?: string;
  children?: FrameGroup[];
  copyFlag: 1 | 0;
  lv?: number;
}

// 碳数据详情
export interface CDataDetail {
  id: string;
  // 填报状态
  state: string;
  fgVoList: Group[];

  groupTree: FrameGroup[];
}