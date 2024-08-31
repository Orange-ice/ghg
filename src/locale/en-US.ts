import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',

  'menu.carbonData': '碳数据',
  'menu.standardDisplay': '标准管理',
  'menu.carbonDataManage': '数据管理',
  'menu.myDataItem': '我的数据项',

  'navbar.app.jimu': 'Building JIMU Carbon Cloud',
  'navbar.app.jimuTips': 'Full life cycle enterprise greenhouse gas accounting',
  'navbar.app.lca': 'Building JIMU LCA Cloud',
  'navbar.app.lcaTips': 'Product life cycle greenhouse gas accounting',
  'navbar.app.view': 'Carbon panorama',
  'navbar.app.viewTips':
    'Intuitively and clearly control the real-time dynamics of corporate carbon emissions',
  'navbar.app.business': 'Carbon trading',
  'navbar.app.businessTips':
    'Provide transaction matching services for corporate carbon assets',
  'navbar.app.report': 'Carbon report',
  'navbar.app.reportTips':
    'Corporate carbon asset management report that meets national standards',
  'navbar.app.supplier': 'Supply chain',
  'navbar.app.supplierTips':
    'Achieve efficient collaboration and agile supply between upstream and downstream suppliers of the enterprise',
  'navbar.app.headquarters': 'Headquarters management',
  'navbar.app.headquartersTips':
    "Carbon management model tailored for an enterprise's one-headquarters, multi-base structure",
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
};
