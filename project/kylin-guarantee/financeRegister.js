/**
 * @Author: wangyw26123
 * @Description: 中登网
 * @Date: Created in 2022-02-16 10:15:51
 * @Modifed By:
 */

const routes = [
  {
    name: '动产查询列表',
    path: '/guaranteeRegister/directConnectionRegisterQueryPage',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'registerThirdId': 'LN@natural(10000000, 99999999)',
          'mortgagor': '@cname',
          'managerName': '@cname',
          'secondary_investigator_name': '@cname',
          'registerStartDate': '@datetime',
          'registerEndDate': '@datetime',
          'registerType|1': [
            '001',
            '002',
            '003',
          ],
          'registerBusinessType|1': [
            '001',
            '002',
            '003',
          ],
          'guarantorInfoList|1-10': [
            {
              affiliatedName: '@cname'
            }
          ],
          'securedPartyInfoList|1-10': [
            {
              affiliatedName: '@cname'
            }
          ],
        }],
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
    name: '查询动产登记列表',
    path: '/v1/guaranteeRegister/queryRegisterPage',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'registerId': 'LN@natural(10000000, 99999999)',
          'registerBusinessType|1': [
            '002',
          ],
          'guarantorInfoList|1-10': [
            {
              affiliatedName: '@cname'
            }
          ],
          'securedPartyInfoList|1-10': [
            {
              affiliatedName: '@cname'
            }
          ],
          relationSystem: '001',
          'relationBizType|1': [
            '001'
          ],
          'relationId': 'LN@natural(10000000, 99999999)',
          'registerStartDate': '@datetime',
          'registerEndDate': '@datetime',
          'registerStatus|1': [
            '001',
            '002',
            '003',
            '004',
          ],
          'operateName': '@cname',
          'operateOrganName': '云科',
          'createTime': '@datetime',
          'updateTime': '@datetime',
        }],
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
    name: '查询担保登记详情',
    path: '/v1/guaranteeRegister/queryDetail',
    context: (ctx) => {
      const mockData = $Mock({
        basicInfo: {
          registerType: '',
          'registerTerm|10-99': 34,
          relationId: '@id'
        },
        assetInfo: {
          contractNo: 'LN@natural(10000000, 99999999)',
          contractCurrency: '',
          contractAmount: '@natural(10000000, 99999999)',
          propertyCurrency: '',
          propertyAmount: '@natural(10000000, 99999999)',
          propertyDesc: '3434',
        },
        'transferorList|6': [
          {
            type: '',
            name: '@name',
            certificateKind: '居民身份证',
            certificateNo: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
          }
        ],
        'assigneeList|6': [
          {
            type: '',
            name: '@name',
            certificateKind: '居民身份证',
            certificateNo: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
          }
        ],
        'attachmentList|6': [
          {
            id: '@natural(10000000, 99999999)',
            name: '@cname',
            size: '',
            uploadDate: '@datetime',
            uploader: '@name'
          }
        ],
      });
      ctx.statusCode = 200;
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
  {
    name: '查询担保担保登记记录',
    path: '/v1/guaranteeRegister/queryRecordPage',
    context: (ctx) => {
      const mockData = $Mock({
        'list|30-100': [{
          'modifyCode|100-999': 222,
          registerType: '',
          registerAuthorizer: '@cname',
          filingNo: '@cname',
          registerResult: '',
          registerDate: '@datetime',
          remark: '@cparagraph()',
        }],
      });
      mockData.total = mockData.list.length
      ctx.statusCode = 200;
      ctx.body = {
        data: mockData,
        httpStatus: 200,
        responseType: 'HSJRY_SUCCESS',
      };
    },
  },
];

module.exports = routes;
