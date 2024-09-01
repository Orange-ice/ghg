import Socket from '@/socket';

export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  // name?: string;
  // avatar?: string;
  // job?: string;
  // organization?: string;
  // location?: string;
  // email?: string;
  // introduction?: string;
  // personalWebsite?: string;
  // jobName?: string;
  // organizationName?: string;
  // locationName?: string;
  // phone?: string;
  // registrationDate?: string;
  // accountId?: string;
  // certification?: number;
  role: RoleType;
  id?: string;
  username?: string;
  company?: {
    id: string;
    name: string;
  };
  industry?: {
    id: string;
    name: string;
  };

  workBenchUserInfo: WorkBenchUserInfo;
  workBenchRole: UserRoleTypes;
  lcaStatus:LcaStatus
  webInfo: WebInfo;
  wbSocket?: Socket<string, MessageType>;
  unreadCount?: number;

  initFlag: boolean;
}


/** 工作台用户信息 */
export interface WorkBenchUserInfo {
  accesstoken: string;
  comId: string;
  companyId: string;
  companyName: string;
  email: string;
  mobile: string;
  name: string;
  userId: string;
  username: string;
  iconUrl: string;
  logoUrl: string;
  licenseStatus: string;
  indexLogoUrl: string;
  indexSkipUrl: string;
  /** 0:未认证，1：认证中，2：已认证，3：认证失败 */
  isAuth: string;
  pic:string

  // [key: string]: any;
}

export interface LcaStatus{
  expireDate: string;
  hasLca: boolean;
}

type AppMenuType = {
  id: string;
  uuid: string;
  menuName: string;
  menuCode: string;
  menuDesc?: string;
  menuIcon?: string;
  menuInfo?: string;
  menuLevel: number;
  menuOrder?: string;
  menuParentId: string;
  menuType: number;
  menuUrl: string;
  projectType: string;
  status: number;
  systemType: string;
  visible: 1 | 0;
};
type MenuPageType = {
  id: string;
  uuid: string;
  menuName: string;
  menuCode: string;
  menuDesc?: string;
  menuIcon?: string;
  menuInfo?: string;
  menuLevel: number;
  menuOrder?: string;
  menuParentId: string;
  menuType: number;
  menuUrl: string;
  projectType: string;
  status: number;
  systemType: string;
  visible: 1 | 0;
  classification: number;
};

export interface UserRoleTypes {
  appList: any[];
  appMenuList: AppMenuType[];
  buttons: string[];
  menuModule: MenuPageType[];
  menuPage: MenuPageType[];
}

export interface WebInfo {
  loginLogo: string;
  icp: string;
  picp: string;
  phone: string;
  loginTitle?: string;
  logoutRedirectUrl?: string;
  mainLogo?: string;
  mainLogoUrl?: string;
  phoneArr?:[{address:string;phone: string}];

  // [key: string]: any;
}

export interface MessageType {
  uuid: string;
  title: string;
  content: string;
  sendType: string;
  createTime: string;
  billId?: string;
  readTime?: string;
}
