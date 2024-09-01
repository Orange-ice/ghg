export type PrefixType = 'EC' | 'GHG' | 'PERMISSION' | 'OSS' | 'BASIC';

export const API_PREFIX: Record<PrefixType, string> = {
  EC: '/ecdigit/api',
  GHG: '/api/org-emission',
  PERMISSION: '/api/permission',
  OSS: '/api/oss',
  BASIC: '/api/basic',
};
