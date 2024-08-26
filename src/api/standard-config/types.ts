export interface Standard {
  id: string;
  name: string;
  packetFlag: 1 | 0;
  remarks?: string;
  pid: string;
}

export interface StandardCategory {
  name: string;
  id: string;
  children: Standard[];
  remarks: string;

  expand?: boolean;
}
