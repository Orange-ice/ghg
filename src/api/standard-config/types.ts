export interface Standard {
  id: string;
  name: string;
  packetFlag: 1 | 0;
  remarks?: string;
  pid: string;
  diyStandard: string;
  diySubcategory: string;
  blurb: string;
  cycleType: string;
  diyArea: string;
  industryStr: string;
  industryId: string;
  industryImg: string;
}

export interface StandardCategory {
  name: string;
  id: string;
  children: Standard[];
  remarks: string;

  expand?: boolean;
}

export interface AreaItem {
  diyArea: string;
  name: string;
  id: string;
}
