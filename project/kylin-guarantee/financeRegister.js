
const routes = [
  {
    name: '',
    path: '/v1/checkInfo/queryPage',
    context: (ctx) => {
      ctx.statusCode = 200;
      ctx.body = {
        data: $Mock({
          'list|30-100': [{
            'check_id': 'LN@natural(10000000, 99999999)',
            'user_name': '@cname',
            'managerName': '@cname',
            'secondary_investigator_name': '@cname',
            'create_time': '@datetime',
            'investigateTime': '@datetime',
            'createTime': '@datetime',
            'handle_time': '@datetime',
            'check_type|1': [
              '001',
              '002',
              '003'
            ],
            'certificate_kind': '居民身份证',
            'certificate_no': /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
            'user_mobile': /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            'check_biz_type|1': [
              '001',
              '002'
            ],
            'contract_id': 'LN@natural(1000000, 9999999)',
            'credit_limit_id': 'LN@natural(1000000, 9999999)',
            'secondary_investigator_id': 'LN@natural(1000000, 9999999)',
            'buiness': 1,
            'product_name': '@csentence(2, 5)',
            'product_id': 'LN@natural(1000000, 9999999)',
            'status|1': [
              '001',
              '002',
              '003'
            ]
          }],
          'total|30-100': 30,
        }),
        httpStatus: 200,
        responseType: "HSJRY_SUCCESS",
      }
    }
  }
]

module.exports = routes;
