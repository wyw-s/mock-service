module.exports = [
  {
    name: '平安普惠-人工代扣-借据列表',
    path: '/hsjry/easyflow/admin/pingan/artificialwithhold/queryLoanInvoiceInfo',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'custName': '@cname',
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'loanInvoiceId': 'LN@natural(10000000, 99999999)',
          'productName': '@csentence(2, 5)',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      ctx.statusCode = 200;
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-账号管理-分页列表',
    path: '/hsjry/easyflow/admin/pingan/account/manage/pageList',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      ctx.statusCode = 200;
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-账号管理-新增',
    path: '/hsjry/easyflow/admin/pingan/account/manage/add',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-账号管理-修改',
    path: '/hsjry/easyflow/admin/pingan/account/manage/edit',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-账号管理-删除',
    path: '/hsjry/easyflow/admin/pingan/account/manage/delete',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-账户流水',
    path: '/hsjry/easyflow/admin/pingan/account/getSerialList',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'acctNo': 'LN@natural(10000000, 99999999)',
          'summary': '@paragraph',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'ptxnseq|1-10000': 100,
          'bal|1-10000': 100,
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '测试超时',
    path: '/timeout',
    context: async (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3600000)
      });

      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-还款账户下拉列表',
    path: '/hsjry/easyflow/admin/pingan/artificialwithhold/queryAccoutForDropList',
    context: async (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';

      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-获取追偿计划',
    path: '/hsjry/easyflow/admin/pingan/artificialwithhold/getCompRepayPlan',
    context: async (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'accountId': 'LN@natural(10000000, 99999999)',
          'accountName': '@cname',
          'accountType|1': ['DG', 'XN'],
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
          'phoneNo': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
          'virtualAccountId': 'LN@natural(10000000, 99999999)',
          'manager': '超级管理员',
          'preRepayAmount': '@city(true)',
          'compDate': '@city(true)',
          'preRepayAmount|1-10000': 100,
          'leftRepayAmount|1-10000': 100
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';

      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-还款金额明细试算',
    path: '/hsjry/easyflow/admin/pingan/artificialwithhold/trialRepay',
    context: async (ctx) => {
      const mockData = $Mock({
        'repayPrinciple|1-10000': 100,
        'repayAmount|1-10000': 100,
        'repayFee|1-10000': 100,
        'repayOverdueFee|1-10000': 100,
      });
      mockData.statusCode = '00';

      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '平安普惠-人工代扣-还款金额明细试算',
    path: '/interface',
    context: async (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'id': 'LN@natural(10000000, 99999999)',
          'name': '@cname',
          'certificateNo': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
        }]
      });
      mockData.total = mockData.list.length;
      mockData.statusCode = '00';

      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
];
