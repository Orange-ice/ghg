import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',

  'menu.carbonData': '碳数据',
  'menu.standardDisplay': '标准管理',
  'menu.carbonDataManage': '数据管理',
  'menu.myDataItem': '我的数据项',

  // navbar app menu ==========
  'navbar.app.jimu': '积木碳云',
  'navbar.app.jimuTips': '全生命周期企业温室气体核算',
  'navbar.app.lca': '积木LCA云',
  'navbar.app.lcaTips': '产品全生命周期温室气体核算',
  'navbar.app.view': '碳全景',
  'navbar.app.viewTips': '直观清晰掌控企业碳排放实时动态',
  'navbar.app.business': '碳交易',
  'navbar.app.businessTips': '为企业碳资产提供交易撮合服务',
  'navbar.app.report': '碳报告',
  'navbar.app.reportTips': '符合国家标准的企业碳资产管理报告',
  'navbar.app.supplier': '供应链',
  'navbar.app.supplierTips': '实现企业上下游供应商高效协同、敏捷供应',
  'navbar.app.headquarters': '总部管理',
  'navbar.app.headquartersTips': '为企业一总部多基地架构量身定制的碳管理模式',
  // ===================

  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
};
